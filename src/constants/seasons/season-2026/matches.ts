import { Match } from "../../../types";
import { Season2026Team } from "./teams";

/**
 * Fifteen broadcasts: twelve group matches, the two semifinals and the final.
 * As in the 2025 season both semifinals share a single entry, since a bet on
 * them names the winner of each one rather than of a single match.
 *
 * Matches two and three of a group depend on who lost the week before, so
 * they cannot be known in advance. Every pairing marked GUESS is a
 * placeholder: either one of those, or an opening match SVT has not announced
 * yet. Only the four unmarked pairings come from a published description.
 * Correcting a guess means editing its `teams` alone, since the dates and the
 * running order are already right.
 */
export const MATCHES: Match<Season2026Team>[] = [
  // Group 1
  {
    date: "18 september",
    matchType: "group",
    teams: ["Gry Forssell & Jonas Rhodiner", "Lotta Lundgren & Erik Haag"],
    winner: null,
  },
  {
    // GUESS: Bengt & Ayan are confirmed, their opponent is last week's loser.
    date: "25 september",
    matchType: "group",
    teams: ["Lotta Lundgren & Erik Haag", "Bengt Skött & Ayan Jamal"],
    winner: null,
  },
  {
    // GUESS
    date: "2 oktober",
    matchType: "group",
    teams: ["Bengt Skött & Ayan Jamal", "Gry Forssell & Jonas Rhodiner"],
    winner: null,
  },
  // Group 2
  {
    date: "9 oktober",
    matchType: "group",
    teams: [
      "Nils Holmqvist & Karin Magnusson",
      "Isobel Hadley-Kamptz & Kalle Lind",
    ],
    winner: null,
  },
  {
    // GUESS: Malin & Ola are confirmed, their opponent is last week's loser.
    date: "16 oktober",
    matchType: "group",
    teams: [
      "Nils Holmqvist & Karin Magnusson",
      "Malin Persson Giolito & Ola Söderholm",
    ],
    winner: null,
  },
  {
    // GUESS
    date: "23 oktober",
    matchType: "group",
    teams: [
      "Malin Persson Giolito & Ola Söderholm",
      "Isobel Hadley-Kamptz & Kalle Lind",
    ],
    winner: null,
  },
  // Group 3
  {
    // GUESS: which two of the three open the group has not been announced.
    date: "30 oktober",
    matchType: "group",
    teams: [
      "Kirsty Armstrong & Hanna Lublin Niklasson",
      "Andrew Walden & Kristoffer ”K” Svensson",
    ],
    winner: null,
  },
  {
    // GUESS
    date: "6 november",
    matchType: "group",
    teams: [
      "Assia Dahir & Kalle Berg",
      "Kirsty Armstrong & Hanna Lublin Niklasson",
    ],
    winner: null,
  },
  {
    // GUESS
    date: "13 november",
    matchType: "group",
    teams: [
      "Andrew Walden & Kristoffer ”K” Svensson",
      "Assia Dahir & Kalle Berg",
    ],
    winner: null,
  },
  // Group 4
  {
    // GUESS: which two of the three open the group has not been announced.
    date: "20 november",
    matchType: "group",
    teams: ["Amy Deasismont & Uje Brandelius", "Jakob Norrgård & Axel Åhman"],
    winner: null,
  },
  {
    // GUESS
    date: "27 november",
    matchType: "group",
    teams: [
      "Amy Deasismont & Uje Brandelius",
      "Johanna Wagrell & Johan Hurtig",
    ],
    winner: null,
  },
  {
    // GUESS
    date: "4 december",
    matchType: "group",
    teams: ["Johanna Wagrell & Johan Hurtig", "Jakob Norrgård & Axel Åhman"],
    winner: null,
  },
  // Slutspel
  {
    date: "11/18 december",
    matchType: "semifinal",
    teams: null,
    winner: null,
  },
  {
    date: "25 december",
    matchType: "final",
    teams: null,
    winner: null,
  },
];
