import { MATCH_TYPE_TRANSLATION } from "../constants/matches";
import { GAMBLERS } from "../constants/gamblers";
import { Match } from "../types";
import { Card, CardProps as MuiCardProps, CardHeader } from "@mui/material";
import { Chart } from "./Chart";

interface CardProps extends MuiCardProps {
  matchIndex?: number;
  match?: Match;
}

export const ChartCard = (props: CardProps) => {
  const { match, matchIndex, ...rest } = props;
  if (!match || matchIndex === undefined) {
    return null;
  }

  const groupData = getGroupData(match, matchIndex);
  const semifinalsData = getSemifinalsData();
  const finalsData = getFinalsData();
  const title =
    MATCH_TYPE_TRANSLATION[match.matchType] === "Gruppspel"
      ? `Avsnitt ${matchIndex + 1}`
      : MATCH_TYPE_TRANSLATION[match.matchType];

  return (
    <Card sx={{ flex: "0 0 355px", scrollSnapAlign: "start" }} {...rest}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title={`${title} (${match.date})`}
      />
      {match.matchType === "group" ? <Chart data={groupData} /> : null}
      {match.matchType === "semifinal" ? <Chart data={semifinalsData} /> : null}
      {match.matchType === "final" ? <Chart data={finalsData} /> : null}
    </Card>
  );
};

function getGroupData(match: Match, matchIndex: number) {
  const teams = match?.teams;

  if (match.matchType !== "group") {
    return null;
  }
  if (!teams?.[0] || !teams?.[1]) {
    return null;
  }

  let firstClassBetters = [] as string[];
  let trolleyBetters = [] as string[];

  GAMBLERS.forEach((gambler) => {
    const bet = gambler.bets[matchIndex];

    if ("semifinalFirst" in bet && "semifinalSecond" in bet) return;
    if (bet.winner === teams?.[0]) {
      firstClassBetters.push(gambler.name);
    }
    if (bet.winner === teams?.[1]) {
      trolleyBetters.push(gambler.name);
    }
  });

  return [
    {
      id: 0,
      betters: firstClassBetters.join(", "),
      value: firstClassBetters.length,
      label: (location: "legend" | "tooltip" | "arc") => {
        switch (location) {
          case "tooltip":
          case "legend":
            return teams[0] || "";
          default:
            return "";
        }
      },
    },
    {
      id: 1,
      betters: trolleyBetters.join(", "),
      value: trolleyBetters.length,
      label: (location: "legend" | "tooltip" | "arc") => {
        switch (location) {
          case "tooltip":
          case "legend":
            return teams[1] || "";
          default:
            return "";
        }
      },
    },
  ];
}

function getSemifinalsData() {
  const semifinalBets = GAMBLERS.map((gambler) => {
    return {
      gamblerName: gambler.name,
      ...gambler.bets.find((bet) => bet.matchType === "semifinal"),
    };
  });

  const reducedBets = semifinalBets.reduce(
    (acc, bet) => {
      if (bet.semifinalFirst) {
        if (!acc[bet.semifinalFirst]) {
          acc[bet.semifinalFirst] = [];
        }
        acc[bet.semifinalFirst].push(bet.gamblerName);
      }

      if (bet.semifinalSecond) {
        if (!acc[bet.semifinalSecond]) {
          acc[bet.semifinalSecond] = [];
        }
        acc[bet.semifinalSecond].push(bet.gamblerName);
      }

      return acc;
    },
    {} as { [teamName: string]: string[] }
  );

  return Object.entries(reducedBets).map(([team, betters]) => {
    return {
      id: team,
      betters: betters.join(", "),
      value: betters.length,
      label: (location: "legend" | "tooltip" | "arc") => {
        switch (location) {
          case "tooltip":
          case "legend":
            return team;
          default:
            return "";
        }
      },
    };
  });
}

function getFinalsData() {
  const finalBets = GAMBLERS.map((gambler) => {
    return {
      gamblerName: gambler.name,
      ...gambler.bets.find((bet) => bet.matchType === "final"),
    };
  });

  const reducedBets = finalBets.reduce(
    (acc, bet) => {
      if ("winner" in bet) {
        if (!acc[bet.winner]) {
          acc[bet.winner] = [];
        }
        acc[bet.winner].push(bet.gamblerName);
      }
      return acc;
    },
    {} as { [teamName: string]: string[] }
  );

  return Object.entries(reducedBets).map(([team, betters]) => {
    return {
      id: team,
      betters: betters.join(", "),
      value: betters.length,
      label: (location: "legend" | "tooltip" | "arc") => {
        switch (location) {
          case "tooltip":
          case "legend":
            return team;
          default:
            return "";
        }
      },
    };
  });
}
