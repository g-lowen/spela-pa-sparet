import { Gambler, Match, Team } from "../../types";

export function getTeams(match: Match, bet: Gambler["bets"][0]) {
  const { matchType, teams, winner } = match;

  if ("semifinalFirst" in bet && "semifinalSecond" in bet) {
    return {
      firstClass: {
        team: joinTeamMembersWithAmpersand(bet.semifinalFirst),
        className: ""
      },
      trolley: {
        team: joinTeamMembersWithAmpersand(bet.semifinalSecond),
        className: ""
      }
    };
  }

  if (teams === null) {
    return {
      firstClass: {
        team: joinTeamMembersWithAmpersand(bet.winner),
        className: "guess"
      },
      trolley: null
    };
  }
  if (matchType === "group") {
    return {
      firstClass: {
        team: joinTeamMembersWithAmpersand(teams[0]),
        className: getClassName(
          matchBetWithResult(bet.winner, teams[0]),
          winner
        )
      },
      trolley: {
        team: joinTeamMembersWithAmpersand(teams[1]),
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
        team: joinTeamMembersWithAmpersand(bet.winner),
        className: getClassName(bet.winner, winner)
      },
      trolley: null
    };
  }

  return {
    firstClass: {
      team: joinTeamMembersWithAmpersand(bet.winner),
      className: getClassName(bet.winner, winner)
    },
    trolley: null
  };
}

function joinTeamMembersWithAmpersand(teams: Team | "draw" | null) {
  if (teams === null || teams === "draw") {
    return teams;
  }
  return teams.toString().replace(",", " & ");
}

function getClassName(bet: Team | null, result: Team | null) {
  if (result === null || bet === null) {
    return bet === null ? "" : "guess";
  }

  if (bet.toString() === result.toString()) {
    return "correct";
  }
  return "wrong";
}

function matchBetWithResult(bet: Team | null, result: Team | null) {
  return bet?.toString() === result?.toString() ? bet : null;
}
