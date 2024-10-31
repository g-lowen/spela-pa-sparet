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
  const { matchesPlayed, wins, losses, points, correctIndex1, correctIndex2 } =
    getResults(bets);

  return {
    name,
    matchesPlayed,
    wins,
    losses,
    points,
    betResults: MOCK_MATCHES.map((match, index) => {
      const { date, matchType } = match;
      const bet = bets[index];
      const { firstClass, trolley } = getTeams(match, bet);
      const semifinalIsPlayed =
        MOCK_MATCHES[12]?.winner !== null || MOCK_MATCHES[13]?.winner !== null;

      return {
        date,
        firstClass:
          matchType === "semifinal" && semifinalIsPlayed
            ? {
                ...firstClass,
                className:
                  index === correctIndex1 || index === correctIndex2
                    ? "correct"
                    : "wrong"
              }
            : firstClass,
        trolley,
        matchType: MATCH_TYPE_TRANSLATION[matchType]
      };
    })
  };
}

function getResults(bets: Gambler["bets"]) {
  const { semifinalsResults, correctIndex1, correctIndex2 } =
    getSemifinalsResults(bets);
  const results = bets
    .map((bet, index) => {
      const match = MOCK_MATCHES[index];

      if (!match || match.winner === null || bet.winner === null) {
        return null;
      }

      if (match.matchType === "semifinal") {
        return 0;
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

  return { matchesPlayed, wins, losses, points, correctIndex1, correctIndex2 };
}

function getSemifinalsResults(bets: Gambler["bets"]): {
  semifinalsResults: number[];
  correctIndex1: number | null;
  correctIndex2: number | null;
} {
  const semifinalOneWinner = MOCK_MATCHES[12]?.winner?.toString();
  const semifinalTwoWinner = MOCK_MATCHES[13]?.winner?.toString();
  const betSemifinalOneWinner = bets[12]?.winner?.toString();
  const betSemifinalTwoWinner = bets[13]?.winner?.toString();

  let semifinalsResults = [];
  let correctIndex1 = null;
  let correctIndex2 = null;
  if (!betSemifinalOneWinner || !betSemifinalTwoWinner) {
    return { semifinalsResults: [], correctIndex1, correctIndex2 };
  }

  if (
    betSemifinalOneWinner === semifinalOneWinner ||
    betSemifinalOneWinner === semifinalTwoWinner
  ) {
    semifinalsResults.push(3);
    correctIndex1 = 12;
  }
  if (
    betSemifinalTwoWinner === semifinalOneWinner ||
    betSemifinalTwoWinner === semifinalTwoWinner
  ) {
    semifinalsResults.push(3);
    correctIndex2 = 13;
  }

  return { semifinalsResults, correctIndex1, correctIndex2 };
}
