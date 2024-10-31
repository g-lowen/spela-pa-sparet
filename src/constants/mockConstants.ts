import { Gambler, Match } from "../types";

export const MOCK_MATCHES: Match[] = [
  {
    date: "1 november",
    matchType: "group",
    teams: [
      ["Ebba Kleberg von Sydow", "Anders Tegnell"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    // winner: null
    winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
  },
  {
    date: "8 november",
    matchType: "group",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Ebba Kleberg von Sydow", "Anders Tegnell"]
    ],
    winner: null
    // winner: ["Hanna Dorsin", "Emma Molin"]
  },
  {
    date: "15 november",
    matchType: "group",
    teams: [
      ["Gry Forssell", "Jonas Rhodiner"],
      ["Hanna Dorsin", "Emma Molin"]
    ],
    winner: null
    // winner: "draw"
  },
  {
    date: "22 november",
    matchType: "group",
    teams: [
      ["Ebba Kleberg von Sydow", "Anders Tegnell"],
      ["Gry Forssell", "Jonas Rhodiner"]
    ],
    winner: null
    // winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
  },
  {
    date: "29 november",
    matchType: "group",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    winner: null
    // winner: ["Hector Apelgren", "Peter Apelgren"]
  },
  {
    date: "6 december",
    matchType: "group",
    teams: [
      ["Hector Apelgren", "Peter Apelgren"],
      ["Gry Forssell", "Jonas Rhodiner"]
    ],
    winner: null
    // winner: ["Hector Apelgren", "Peter Apelgren"]
  },
  {
    date: "13 december",
    matchType: "group",
    teams: [
      ["Anders Eldeman", "Christoffer Nyqvist"],
      ["Farah Abadi", "Johan Glans"]
    ],
    winner: null
    // winner: ["Farah Abadi", "Johan Glans"]
  },
  {
    date: "20 december",
    matchType: "group",
    teams: [
      ["Farah Abadi", "Johan Glans"],
      ["Jennifer Kücükaslan", "Johan Kücükaslan"]
    ],
    winner: null
    // winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
  },
  {
    date: "27 december",
    matchType: "group",
    teams: [
      ["Jennifer Kücükaslan", "Johan Kücükaslan"],
      ["Messiah Hallberg", "Sara Wimmercranz"]
    ],
    winner: null
    // winner: ["Messiah Hallberg", "Sara Wimmercranz"]
  },
  {
    date: "3 januari",
    matchType: "group",
    teams: [
      ["Messiah Hallberg", "Sara Wimmercranz"],
      ["Anders Eldeman", "Christoffer Nyqvist"]
    ],
    winner: null
    // winner: ["Messiah Hallberg", "Sara Wimmercranz"]
  },
  {
    date: "10 januari",
    matchType: "group",
    teams: [
      ["Anders Eldeman", "Christoffer Nyqvist"],
      ["Jennifer Kücükaslan", "Johan Kücükaslan"]
    ],
    winner: null
    // winner: ["Anders Eldeman", "Christoffer Nyqvist"]
  },
  {
    date: "17 januari",
    matchType: "group",
    teams: [
      ["Farah Abadi", "Johan Glans"],
      ["Messiah Hallberg", "Sara Wimmercranz"]
    ],
    winner: null
    // winner: ["Farah Abadi", "Johan Glans"]
  },
  {
    date: "24/31 januari",
    matchType: "semifinal",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Messiah Hallberg", "Sara Wimmercranz"]
    ],
    // winner: null
    winner: ["Messiah Hallberg", "Sara Wimmercranz"]
  },
  {
    date: "24/31 januari",
    matchType: "semifinal",
    teams: [
      ["Anders Eldeman", "Christoffer Nyqvist"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    winner: null
    // winner: ["Hector Apelgren", "Peter Apelgren"]
  },
  {
    date: "7 februari",
    matchType: "final",
    teams: [
      ["Hanna Dorsin", "Emma Molin"],
      ["Hector Apelgren", "Peter Apelgren"]
    ],
    winner: null
    // winner: ["Messiah Hallberg", "Sara Wimmercranz"]
  }
];

export const MOCK_GAMBLERS: Gambler[] = [
  {
    name: "Elin",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Fabian",
    bets: [
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Fanni",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: "draw"
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      }
    ]
  },
  {
    name: "Felix",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Gustav",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Irma",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Markus",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Oskar",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Selma",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  },
  {
    name: "Valle",
    bets: [
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Gry Forssell", "Jonas Rhodiner"]
      },
      {
        winner: ["Ebba Kleberg von Sydow", "Anders Tegnell"]
      },
      {
        winner: ["Hanna Dorsin", "Emma Molin"]
      },
      {
        winner: ["Hector Apelgren", "Peter Apelgren"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Jennifer Kücükaslan", "Johan Kücükaslan"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Messiah Hallberg", "Sara Wimmercranz"]
      },
      {
        winner: ["Anders Eldeman", "Christoffer Nyqvist"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      },
      {
        winner: ["Farah Abadi", "Johan Glans"]
      }
    ]
  }
] as const;
