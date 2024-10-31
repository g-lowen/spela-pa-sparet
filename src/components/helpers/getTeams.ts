import { Gambler, Match, Players, Winner } from "../../types";

export function getTeams(match: Match, bet: Gambler["bets"][0]) {
  const { matchType, teams, winner } = match;
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
        className: getClassName(compareArrays(bet.winner, teams[0]), winner)
      },
      trolley: {
        team: joinTeamMembersWithAmpersand(teams[1]),
        className: getClassName(compareArrays(bet.winner, teams[1]), winner)
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

function joinTeamMembersWithAmpersand(teams: Players | "draw" | null) {
  if (teams === null || teams === "draw") {
    return teams;
  }
  return teams.toString().replace(",", " & ");
}

function getClassName(betWinner: Winner, winner: Winner) {
  const drawSuffix = betWinner === "draw" ? "Draw" : "";
  if (winner === null || betWinner === null) {
    return betWinner === null ? "" : "guess" + drawSuffix;
  }

  if (betWinner.toString() === winner.toString()) {
    return "correct" + drawSuffix;
  }
  return "wrong" + drawSuffix;
}

function compareArrays(array1: Winner, array2: Winner) {
  if (array1 === "draw" || array2 === "draw") {
    return "draw";
  }
  return array1?.toString() === array2?.toString() ? array1 : null;
}
