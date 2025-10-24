import { MATCHES } from "../../../constants/matches";
import { Gambler, Match } from "../../../types";
import { getTeams } from "./../getTeams";

export function createRowData(gambler: Gambler) {
  const { bets, name } = gambler;
  const { losses, matchesPlayed, points, semifinals, wins } = getResults(bets);

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

      if (matchType === "semifinal") {
        if (Array.isArray(semifinals)) {
          return {
            date,
            firstClass: {
              team: firstClass.team,
              className:
                semifinals[0] === null
                  ? "guess"
                  : semifinals[0]
                    ? "correct"
                    : "wrong",
            },
            trolley: {
              team: trolley?.team,
              className:
                semifinals[1] === null
                  ? "guess"
                  : semifinals[1]
                    ? "correct"
                    : "wrong",
            },
            matchType,
          };
        }
      }

      return {
        date,
        firstClass,
        trolley,
        matchType,
      };
    }),
  };
}

function getResults(bets: Gambler["bets"]) {
  const results = bets.map((bet, index) => {
    const match = MATCHES[index];
    const multiplier = {
      final: 5,
      semifinal: 3,
      group: 1,
    }[match.matchType];
    if (bet.matchType === "semifinal") {
      if (match.teams === null) return [null, null];

      const { firstSemifinalBet, secondSemifinalBet } = getSemiFinalResults(
        bet.semifinalFirst,
        bet.semifinalSecond,
        match.teams
      );

      return [
        firstSemifinalBet === null ? null : firstSemifinalBet ? multiplier : 0,
        secondSemifinalBet === null
          ? null
          : secondSemifinalBet
            ? multiplier
            : 0,
      ];
    }

    if (match.winner === null) {
      return null;
    }

    if (match.winner === bet.winner) {
      return 1 * multiplier;
    }

    return 0;
  });

  const flatResults = results.flat().filter((result) => result !== null);
  const matchesPlayed = flatResults.length;
  const wins = flatResults.filter((result) => result).length;
  const losses = flatResults.filter((result) => result === 0).length;
  const points = flatResults.reduce((sum, result) => sum + result, 0);

  return { losses, matchesPlayed, points, semifinals: results[12], wins };
}

const getSemiFinalResults = (
  semifinalFirst: string,
  semifinalSecond: string,
  semifinals: NonNullable<Match["teams"]>
) => {
  const oneSemiFinalPlayed = semifinals.some((team) => team === null);
  const firstSemifinalBet = semifinals?.find((team) => team === semifinalFirst);

  if (oneSemiFinalPlayed && firstSemifinalBet) {
    return {
      firstSemifinalBet: !!firstSemifinalBet,
      secondSemifinalBet: null,
    };
  }

  let secondSemifinalBet: boolean | null = null;
  if (firstSemifinalBet) {
    const secondSemifinalTeam = semifinals?.find(
      (team) => team !== firstSemifinalBet
    );
    if (secondSemifinalTeam) {
      secondSemifinalBet =
        secondSemifinalTeam === semifinalFirst ||
        secondSemifinalTeam === semifinalSecond;
    }
  } else {
    secondSemifinalBet = !!semifinals?.find((team) => team === semifinalSecond);
  }

  if (oneSemiFinalPlayed) {
    return {
      firstSemifinalBet: null,
      secondSemifinalBet,
    };
  }

  return {
    firstSemifinalBet,
    secondSemifinalBet,
  };
};
