type Players =
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
  matchType: "group" | "semifinal" | "final";
  teams: [Players, Players] | null;
  winner: Players | "draw" | null;
}

export interface Gambler {
  name: string;
  bets: {
    winner: Players | "draw" | null;
  }[];
}
