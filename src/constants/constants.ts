import { Gambler, Match } from "../types";

export const MATCHES: Match[] = [
  {
    date: "1 november",
    matchType: "group",
    teams: [
      ["Ebba Kleberg von Sydow", "Anders Tegnell"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    winner: ["Hector Apelgren", "Peter Apelgren"]
  },
  {
    date: "8 november",
    matchType: "group",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Ebba Kleberg von Sydow", "Anders Tegnell"]
    ],
    winner: null
  },
  {
    date: "15 november",
    matchType: "group",
    teams: [
      ["Gry Forssell", "Jonas Rhodiner"],
      ["Hanna Dorsin", "Emma Molin"]
    ],
    winner: null
  },
  {
    date: "22 november",
    matchType: "group",
    teams: [
      ["Ebba Kleberg von Sydow", "Anders Tegnell"],
      ["Gry Forssell", "Jonas Rhodiner"]
    ],
    winner: null
  },
  {
    date: "29 november",
    matchType: "group",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    winner: null
  },
  {
    date: "6 december",
    matchType: "group",
    teams: [
      ["Hector Apelgren", "Peter Apelgren"],
      ["Gry Forssell", "Jonas Rhodiner"]
    ],
    winner: null
  },
  {
    date: "13 december",
    matchType: "group",
    teams: [
      ["Anders Eldeman", "Christoffer Nyqvist"],
      ["Farah Abadi", "Johan Glans"]
    ],
    winner: null
  },
  {
    date: "20 december",
    matchType: "group",
    teams: [
      ["Farah Abadi", "Johan Glans"],
      ["Jennifer Kücükaslan", "Johan Kücükaslan"]
    ],
    winner: null
  },
  {
    date: "27 december",
    matchType: "group",
    teams: [
      ["Jennifer Kücükaslan", "Johan Kücükaslan"],
      ["Messiah Hallberg", "Sara Wimmercranz"]
    ],
    winner: null
  },
  {
    date: "3 januari",
    matchType: "group",
    teams: [
      ["Messiah Hallberg", "Sara Wimmercranz"],
      ["Anders Eldeman", "Christoffer Nyqvist"]
    ],
    winner: null
  },
  {
    date: "10 januari",
    matchType: "group",
    teams: [
      ["Anders Eldeman", "Christoffer Nyqvist"],
      ["Jennifer Kücükaslan", "Johan Kücükaslan"]
    ],
    winner: null
  },
  {
    date: "17 januari",
    matchType: "group",
    teams: [
      ["Farah Abadi", "Johan Glans"],
      ["Messiah Hallberg", "Sara Wimmercranz"]
    ],
    winner: null
  },
  {
    date: "24/31 januari",
    matchType: "semifinal",
    teams: null,
    winner: null
  },
  {
    date: "24/31 januari",
    matchType: "semifinal",
    teams: null,
    winner: null
  },
  {
    date: "7 februari",
    matchType: "final",
    teams: null,
    winner: null
  }
] as const;

export const GAMBLERS: Gambler[] = [
  {
    name: "Elin",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Fabian",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Gry Forssell", "Jonas Rhodiner"] },
      { winner: ["Gry Forssell", "Jonas Rhodiner"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Fanni",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Gustav",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Gry Forssell", "Jonas Rhodiner"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Irma",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Markus",
    bets: [
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] }
    ]
  },
  {
    name: "Oskar",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  },
  {
    name: "Selma",
    bets: [
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Messiah Hallberg", "Sara Wimmercranz"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Farah Abadi", "Johan Glans"] }
    ]
  },
  {
    name: "Valle",
    bets: [
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hanna Dorsin", "Emma Molin"] },
      { winner: ["Gry Forssell", "Jonas Rhodiner"] },
      { winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Farah Abadi", "Johan Glans"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] },
      { winner: ["Anders Eldeman", "Christoffer Nyqvist"] },
      { winner: ["Hector Apelgren", "Peter Apelgren"] }
    ]
  }
] as const;
