import { Match } from "../types";

export const MATCHES: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Ina Lundström & Hanna Hellquist",
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [
      "Jonas Dahlquist & Marie Lehmann",
      "Anders Eldeman & Christoffer Nyqvist",
    ],
    winner: "Anders Eldeman & Christoffer Nyqvist",
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [
      "Jonas Dahlquist & Marie Lehmann",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Jonas Dahlquist & Marie Lehmann",
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [
      "Marianne Ahrne & Anders Ankan Johansson",
      "Julia Frändfors & Oisín Cantwell",
    ],
    winner: "Julia Frändfors & Oisín Cantwell",
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [
      "Tarik Saleh & Ika Johannesson",
      "Marianne Ahrne & Anders Ankan Johansson",
    ],

    winner: "Marianne Ahrne & Anders Ankan Johansson",
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [
      "Tarik Saleh & Ika Johannesson",
      "Julia Frändfors & Oisín Cantwell",
    ],
    winner: "Tarik Saleh & Ika Johannesson",
  },
  {
    date: "5 december",
    matchType: "group",
    teams: ["Johanna Wagrell & Johan Hurtig", "Sofia Dalén & Kalle Möller"],
    winner: "Johanna Wagrell & Johan Hurtig",
  },
  {
    date: "12 december",
    matchType: "group",
    teams: ["Amie Bramme Sey & Gunnar Bolin", "Sofia Dalén & Kalle Möller"],
    winner: "Amie Bramme Sey & Gunnar Bolin",
  },
  {
    date: "19 december",
    matchType: "group",
    teams: ["Amie Bramme Sey & Gunnar Bolin", "Johanna Wagrell & Johan Hurtig"],
    winner: null,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [
      "Kirsty Armstrong & Hanna Lublin Niklasson",
      "Uje Brandelius & Amy Deasismont",
    ],
    winner: null,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Kirsty Armstrong & Hanna Lublin Niklasson",
    ],
    winner: null,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Uje Brandelius & Amy Deasismont",
    ],
    winner: null,
  },
  {
    date: "16/23 januari",
    matchType: "semifinal",
    teams: null,
    winner: null,
  },
  {
    date: "30 januari",
    matchType: "final",
    teams: null,
    winner: null,
  },
];

export const MATCH_TYPE_TRANSLATION = {
  group: "Gruppspel",
  semifinal: "Semifinaler",
  final: "Final",
} as const;
