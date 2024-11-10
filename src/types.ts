export type Team =
  | ["Ebba Kleberg von Sydow", "Anders Tegnell"]
  | ["Hector Apelgren", "Peter Apelgren"]
  | ["Hanna Dorsin", "Emma Molin"]
  | ["Gry Forssell", "Jonas Rhodiner"]
  | ["Messiah Hallberg", "Sara Wimmercranz"]
  | ["Anders Eldeman", "Christoffer Nyqvist"]
  | ["Jennifer Kücükaslan", "Johan Kücükaslan"]
  | ["Farah Abadi", "Johan Glans"];

export interface Match {
  date: string;
  matchType: MatchType;
  teams: [Team, Team] | [Team, null] | null;
  winner: Team | null;
}

export interface Gambler {
  name: string;
  bets: Bet[];
}

type Bet =
  | {
      matchType: Exclude<MatchType, "semifinal">;
      winner: Team;
    }
  | {
      matchType: Extract<MatchType, "semifinal">;
      semifinalFirst: Team;
      semifinalSecond: Team;
    };

type MatchType = "group" | "semifinal" | "final";
