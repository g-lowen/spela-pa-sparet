import { Gambler, Match } from "../types";

export const MATCHES: Match[] = [
  {
    date: "1 november",
    matchType: "group",
    teams: [
      "Ebba Kleberg von Sydow & Anders Tegnell",
      "Hector Apelgren & Peter Apelgren"
    ],
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "8 november",
    matchType: "group",
    teams: [
      "Hanna Dorsin & Emma Molin",
      "Ebba Kleberg von Sydow & Anders Tegnell"
    ],
    winner: "Ebba Kleberg von Sydow & Anders Tegnell"
  },
  {
    date: "15 november",
    matchType: "group",
    teams: ["Gry Forssell & Jonas Rhodiner", "Hanna Dorsin & Emma Molin"],
    winner: "Gry Forssell & Jonas Rhodiner"
  },
  {
    date: "22 november",
    matchType: "group",
    teams: [
      "Ebba Kleberg von Sydow & Anders Tegnell",
      "Gry Forssell & Jonas Rhodiner"
    ],
    winner: "Gry Forssell & Jonas Rhodiner"
  },
  {
    date: "29 november",
    matchType: "group",
    teams: ["Hanna Dorsin & Emma Molin", "Hector Apelgren & Peter Apelgren"],
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "6 december",
    matchType: "group",
    teams: [
      "Hector Apelgren & Peter Apelgren",
      "Gry Forssell & Jonas Rhodiner"
    ],
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "13 december",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Farah Abadi & Johan Glans"
    ],
    winner: "Anders Eldeman & Christoffer Nyqvist"
  },
  {
    date: "20 december",
    matchType: "group",
    teams: [
      "Farah Abadi & Johan Glans",
      "Jennifer Kücükaslan & Johan Kücükaslan"
    ],
    winner: "Farah Abadi & Johan Glans"
  },
  {
    date: "27 december",
    matchType: "group",
    teams: [
      "Jennifer Kücükaslan & Johan Kücükaslan",
      "Messiah Hallberg & Sara Wimmercranz"
    ],
    winner: "Jennifer Kücükaslan & Johan Kücükaslan"
  },
  {
    date: "3 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Anders Eldeman & Christoffer Nyqvist"
    ],
    winner: "Anders Eldeman & Christoffer Nyqvist"
  },
  {
    date: "10 januari",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Jennifer Kücükaslan & Johan Kücükaslan"
    ],
    winner: "Jennifer Kücükaslan & Johan Kücükaslan"
  },
  {
    date: "17 januari",
    matchType: "group",
    teams: ["Farah Abadi & Johan Glans", "Messiah Hallberg & Sara Wimmercranz"],
    winner: "Messiah Hallberg & Sara Wimmercranz"
  },
  {
    date: "24/31 januari",
    matchType: "semifinal",
    teams: [
      "Hector Apelgren & Peter Apelgren",
      "Gry Forssell & Jonas Rhodiner"
    ],
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "7 februari",
    matchType: "final",
    teams: null,
    winner: null
  }
];

export const GAMBLERS: Gambler[] = [
  {
    name: "Elin",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Farah Abadi & Johan Glans"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Fabian",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Gry Forssell & Jonas Rhodiner" },
      { matchType: "group", winner: "Gry Forssell & Jonas Rhodiner" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Hanna Dorsin & Emma Molin"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Fanni",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Gustav",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Gry Forssell & Jonas Rhodiner" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Irma",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Farah Abadi & Johan Glans"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Markus",
    bets: [
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      {
        matchType: "semifinal",
        semifinalFirst: "Ebba Kleberg von Sydow & Anders Tegnell",
        semifinalSecond: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      { matchType: "final", winner: "Ebba Kleberg von Sydow & Anders Tegnell" }
    ]
  },
  {
    name: "Oskar",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Hanna Dorsin & Emma Molin"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  },
  {
    name: "Selma",
    bets: [
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Messiah Hallberg & Sara Wimmercranz" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Farah Abadi & Johan Glans"
      },
      { matchType: "final", winner: "Farah Abadi & Johan Glans" }
    ]
  },
  {
    name: "Valle",
    bets: [
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hanna Dorsin & Emma Molin" },
      { matchType: "group", winner: "Gry Forssell & Jonas Rhodiner" },
      { matchType: "group", winner: "Ebba Kleberg von Sydow & Anders Tegnell" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Hector Apelgren & Peter Apelgren" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Jennifer Kücükaslan & Johan Kücükaslan" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Anders Eldeman & Christoffer Nyqvist" },
      { matchType: "group", winner: "Farah Abadi & Johan Glans" },
      {
        matchType: "semifinal",
        semifinalFirst: "Hector Apelgren & Peter Apelgren",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      { matchType: "final", winner: "Hector Apelgren & Peter Apelgren" }
    ]
  }
];

export const MATCH_TYPE_TRANSLATION = {
  group: "Gruppspel",
  semifinal: "Semifinaler",
  final: "Final"
} as const;
