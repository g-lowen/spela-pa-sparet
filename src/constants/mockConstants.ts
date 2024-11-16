import { Gambler, Match } from "../types";

export const MOCK_MATCHES: Match[] = [
  {
    date: "1 november",
    matchType: "group",
    teams: [
      "Ebba Kleberg von Sydow & Anders Tegnell",
      "Hector Apelgren & Peter Apelgren"
    ],
    // winner: null
    winner: "Ebba Kleberg von Sydow & Anders Tegnell"
  },
  {
    date: "8 november",
    matchType: "group",
    teams: [
      "Hanna Dorsin & Emma Molin",
      "Ebba Kleberg von Sydow & Anders Tegnell"
    ],
    // winner: null
    winner: "Hanna Dorsin & Emma Molin"
  },
  {
    date: "15 november",
    matchType: "group",
    teams: ["Gry Forssell & Jonas Rhodiner", "Hanna Dorsin & Emma Molin"],
    // winner: null
    winner: "Gry Forssell & Jonas Rhodiner"
  },
  {
    date: "22 november",
    matchType: "group",
    teams: [
      "Ebba Kleberg von Sydow & Anders Tegnell",
      "Gry Forssell & Jonas Rhodiner"
    ],
    // winner: null
    winner: "Ebba Kleberg von Sydow & Anders Tegnell"
  },
  {
    date: "29 november",
    matchType: "group",
    teams: ["Hanna Dorsin & Emma Molin", "Hector Apelgren & Peter Apelgren"],
    // winner: null
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "6 december",
    matchType: "group",
    teams: [
      "Hector Apelgren & Peter Apelgren",
      "Gry Forssell & Jonas Rhodiner"
    ],
    // winner: null
    winner: "Hector Apelgren & Peter Apelgren"
  },
  {
    date: "13 december",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Farah Abadi & Johan Glans"
    ],
    // winner: null
    winner: "Farah Abadi & Johan Glans"
  },
  {
    date: "20 december",
    matchType: "group",
    teams: [
      "Farah Abadi & Johan Glans",
      "Jennifer Kücükaslan & Johan Kücükaslan"
    ],
    // winner: null
    winner: "Farah Abadi & Johan Glans"
  },
  {
    date: "27 december",
    matchType: "group",
    teams: [
      "Jennifer Kücükaslan & Johan Kücükaslan",
      "Messiah Hallberg & Sara Wimmercranz"
    ],
    // winner: null
    winner: "Jennifer Kücükaslan & Johan Kücükaslan"
  },
  {
    date: "3 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Anders Eldeman & Christoffer Nyqvist"
    ],
    // winner: null
    winner: "Messiah Hallberg & Sara Wimmercranz"
  },
  {
    date: "10 januari",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Jennifer Kücükaslan & Johan Kücükaslan"
    ],
    // winner: null
    winner: "Anders Eldeman & Christoffer Nyqvist"
  },
  {
    date: "17 januari",
    matchType: "group",
    teams: ["Farah Abadi & Johan Glans", "Messiah Hallberg & Sara Wimmercranz"],
    // winner: null
    winner: "Farah Abadi & Johan Glans"
  },
  {
    date: "test januari",
    matchType: "semifinal",
    teams: [
      // "Farah Abadi & Johan Glans",
      "Messiah Hallberg & Sara Wimmercranz",
      "Hanna Dorsin & Emma Molin"
      // null
    ],
    // teams: null,
    // winner: null
    winner: "Messiah Hallberg & Sara Wimmercranz"
  },
  {
    date: "7 februari",
    matchType: "final",
    teams: ["Hanna Dorsin & Emma Molin", "Hector Apelgren & Peter Apelgren"],
    winner: null
    // winner: "Messiah Hallberg & Sara Wimmercranz"
  }
];

export const MOCK_GAMBLERS: Gambler[] = [
  {
    name: "Elin",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Anders Eldeman & Christoffer Nyqvist",
        semifinalSecond: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Fabian",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "final",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      }
    ]
  },
  {
    name: "Fanni",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      }
    ]
  },
  {
    name: "Felix",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Ebba Kleberg von Sydow & Anders Tegnell",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Gustav",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Irma",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Markus",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Oskar",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Selma",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  },
  {
    name: "Valle",
    bets: [
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Gry Forssell & Jonas Rhodiner"
      },
      {
        matchType: "group",
        winner: "Ebba Kleberg von Sydow & Anders Tegnell"
      },
      {
        matchType: "group",
        winner: "Hanna Dorsin & Emma Molin"
      },
      {
        matchType: "group",
        winner: "Hector Apelgren & Peter Apelgren"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Farah Abadi & Johan Glans"
      },
      {
        matchType: "group",
        winner: "Jennifer Kücükaslan & Johan Kücükaslan"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "group",
        winner: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "group",
        winner: "Messiah Hallberg & Sara Wimmercranz"
      },
      {
        matchType: "semifinal",
        semifinalFirst: "Hanna Dorsin & Emma Molin",
        semifinalSecond: "Anders Eldeman & Christoffer Nyqvist"
      },
      {
        matchType: "final",
        winner: "Farah Abadi & Johan Glans"
      }
    ]
  }
];
