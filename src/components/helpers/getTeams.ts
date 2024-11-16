import { Gambler, Match, Team } from "../../types";

export function getTeams(match: Match, bet: Gambler["bets"][0]) {
  const { matchType, teams, winner } = match;

  if ("semifinalFirst" in bet && "semifinalSecond" in bet) {
    return {
      firstClass: {
        team: bet.semifinalFirst,
        className: ""
      },
      trolley: {
        team: bet.semifinalSecond,
        className: ""
      }
    };
  }

  if (teams === null) {
    return {
      firstClass: {
        team: bet.winner,
        className: "guess"
      },
      trolley: null
    };
  }
  if (matchType === "group") {
    return {
      firstClass: {
        team: teams[0],
        className: getClassName(
          matchBetWithResult(bet.winner, teams[0]),
          winner
        )
      },
      trolley: {
        team: teams[1],
        className: getClassName(
          matchBetWithResult(bet.winner, teams[1]),
          winner
        )
      }
    };
  }
  if (matchType === "semifinal") {
    return {
      firstClass: {
        team: bet.winner,
        className: getClassName(bet.winner, winner)
      },
      trolley: null
    };
  }

  return {
    firstClass: {
      team: bet.winner,
      className: getClassName(bet.winner, winner)
    },
    trolley: null
  };
}

function getClassName(bet: Team | null, result: Team | null) {
  if (result === null || bet === null) {
    return bet === null ? "" : "guess";
  }

  if (bet === result) {
    return "correct";
  }
  return "wrong";
}

function matchBetWithResult(bet: Team | null, result: Team | null) {
  return bet === result ? bet : null;
}
