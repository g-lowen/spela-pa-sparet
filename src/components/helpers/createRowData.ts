import { MATCHES } from "../../constants/constants";
import { MOCK_MATCHES } from "../../constants/mockConstants";
import { Gambler } from "../../types";
import { getTeams } from "./getTeams";

const MATCH_TYPE_TRANSLATION = {
  group: "Gruppspel",
  semifinal: "Semifinal",
  final: "Final"
};

export function createRowData(gambler: Gambler) {
  const { bets, name } = gambler;
  const { matchesPlayed, wins, losses, points } = getResults(bets);

  return {
    name,
    matchesPlayed,
    wins,
    losses,
    points,
    betResults: MATCHES.map((match, index) => {
      const { date, matchType } = match;
      const bet = bets[index];
      const { firstClass, trolley } = getTeams(match, bet);

      return {
        date,
        firstClass,
        trolley,
        matchType: MATCH_TYPE_TRANSLATION[matchType]
      };
    })
  };
}

function getResults(bets: Gambler["bets"]) {
  const semifinalsResults = getSemifinalsResults(bets);
  const results = bets
    .map((bet, index) => {
      const match = MATCHES[index];

      if (!match || match.winner === null || bet.winner === null) {
        return null;
      }

      if (match.matchType === "semifinal") {
        return null;
      }

      if (match.winner.toString() === bet.winner.toString()) {
        const multiplier = {
          final: 5,
          group: 1
        }[match.matchType];
        return 1 * multiplier;
      }

      return 0;
    })
    .concat(semifinalsResults)
    .filter((result) => result !== null);

  const matchesPlayed = results.length;
  const wins = results.filter((result) => result).length;
  const losses = results.filter((result) => result === 0).length;
  const points = results.reduce((sum, result) => sum + result, 0);

  return { matchesPlayed, wins, losses, points };
}

function getSemifinalsResults(bets: Gambler["bets"]) {
  const semifinalOneWinner = MATCHES[12]?.winner?.toString();
  const semifinalTwoWinner = MATCHES[13]?.winner?.toString();
  const betSemifinalOneWinner = bets[12]?.winner?.toString();
  const betSemifinalTwoWinner = bets[13]?.winner?.toString();

  let result = [];
  if (!betSemifinalOneWinner || !betSemifinalTwoWinner) {
    return [];
  }

  if (
    betSemifinalOneWinner === semifinalOneWinner ||
    betSemifinalOneWinner === semifinalTwoWinner
  ) {
    result.push(3);
  }
  if (
    betSemifinalTwoWinner === semifinalOneWinner ||
    betSemifinalTwoWinner === semifinalTwoWinner
  ) {
    result.push(3);
  }

  return result;
}
