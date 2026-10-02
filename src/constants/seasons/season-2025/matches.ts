import { Match } from "../../../types";
import { Season2025Team } from "./teams";

export const MATCHES: Match<Season2025Team>[] = [
  {
    id: "grupp-1-1",
    date: "24 oktober",
    matchType: "group",
    teams: [
      "Anders Eldeman & Christoffer Nyqvist",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Ina Lundström & Hanna Hellquist",
  },
  {
    id: "grupp-1-2",
    date: "31 oktober",
    matchType: "group",
    teams: [
      "Jonas Dahlquist & Marie Lehmann",
      "Anders Eldeman & Christoffer Nyqvist",
    ],
    winner: "Anders Eldeman & Christoffer Nyqvist",
  },
  {
    id: "grupp-1-3",
    date: "7 november",
    matchType: "group",
    teams: [
      "Jonas Dahlquist & Marie Lehmann",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Jonas Dahlquist & Marie Lehmann",
  },
  {
    id: "grupp-2-1",
    date: "14 november",
    matchType: "group",
    teams: [
      "Marianne Ahrne & Anders Ankan Johansson",
      "Julia Frändfors & Oisín Cantwell",
    ],
    winner: "Julia Frändfors & Oisín Cantwell",
  },
  {
    id: "grupp-2-2",
    date: "21 november",
    matchType: "group",
    teams: [
      "Tarik Saleh & Ika Johannesson",
      "Marianne Ahrne & Anders Ankan Johansson",
    ],

    winner: "Marianne Ahrne & Anders Ankan Johansson",
  },
  {
    id: "grupp-2-3",
    date: "28 november",
    matchType: "group",
    teams: [
      "Tarik Saleh & Ika Johannesson",
      "Julia Frändfors & Oisín Cantwell",
    ],
    winner: "Tarik Saleh & Ika Johannesson",
  },
  {
    id: "grupp-3-1",
    date: "5 december",
    matchType: "group",
    teams: ["Johanna Wagrell & Johan Hurtig", "Sofia Dalén & Kalle Möller"],
    winner: "Johanna Wagrell & Johan Hurtig",
  },
  {
    id: "grupp-3-2",
    date: "12 december",
    matchType: "group",
    teams: ["Amie Bramme Sey & Gunnar Bolin", "Sofia Dalén & Kalle Möller"],
    winner: "Amie Bramme Sey & Gunnar Bolin",
  },
  {
    id: "grupp-3-3",
    date: "19 december",
    matchType: "group",
    teams: ["Amie Bramme Sey & Gunnar Bolin", "Johanna Wagrell & Johan Hurtig"],
    winner: "Amie Bramme Sey & Gunnar Bolin",
  },
  {
    id: "grupp-4-1",
    date: "26 december",
    matchType: "group",
    teams: [
      "Kirsty Armstrong & Hanna Lublin Niklasson",
      "Uje Brandelius & Amy Deasismont",
    ],
    winner: "Kirsty Armstrong & Hanna Lublin Niklasson",
  },
  {
    id: "grupp-4-2",
    date: "2 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Uje Brandelius & Amy Deasismont",
    ],
    winner: "Uje Brandelius & Amy Deasismont",
  },
  {
    id: "grupp-4-3",
    date: "9 januari",
    matchType: "group",
    teams: [
      "Messiah Hallberg & Sara Wimmercranz",
      "Kirsty Armstrong & Hanna Lublin Niklasson",
    ],
    winner: "Kirsty Armstrong & Hanna Lublin Niklasson",
  },
  {
    id: "semifinal",
    date: "16/23 januari",
    matchType: "semifinal",
    teams: [
      "Kirsty Armstrong & Hanna Lublin Niklasson",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Kirsty Armstrong & Hanna Lublin Niklasson",
  },
  {
    id: "final",
    date: "30 januari",
    matchType: "final",
    teams: [
      "Kirsty Armstrong & Hanna Lublin Niklasson",
      "Ina Lundström & Hanna Hellquist",
    ],
    winner: "Kirsty Armstrong & Hanna Lublin Niklasson",
  },
];
