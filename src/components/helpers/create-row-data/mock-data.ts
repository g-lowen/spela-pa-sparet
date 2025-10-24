import { Match } from "../../../types";

const TEAM_A = "Anders Eldeman & Christoffer Nyqvist";
const TEAM_B = "Ina Lundström & Hanna Hellquist";
const TEAM_C = "Jonas Dahlquist & Marie Lehmann";
const TEAM_D = "Marianne Ahrne & Anders Ankan Johansson";
const TEAM_E = "Julia Frändfors & Oisín Cantwell";
const TEAM_F = "Tarik Saleh & Ika Johannesson";
const TEAM_G = "Johanna Wagrell & Johan Hurtig";
const TEAM_H = "Sofia Dalén & Kalle Möller";
const TEAM_I = "Amie Bramme Sey & Gunnar Bolin";
const TEAM_J = "Kirsty Armstrong & Hanna Lublin Niklasson";
const TEAM_K = "Uje Brandelius & Amy Deasismont";
const TEAM_L = "Messiah Hallberg & Sara Wimmercranz";

export const ZERO_MATCHES_PLAYED: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [TEAM_A, TEAM_B],
    winner: null,
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [TEAM_C, TEAM_D],
    winner: null,
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [TEAM_C, TEAM_B],
    winner: null,
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [TEAM_D, TEAM_E],
    winner: null,
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_E],
    winner: null,
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_D],
    winner: null,
  },
  {
    date: "5 december",
    matchType: "group",
    teams: [TEAM_G, TEAM_H],
    winner: null,
  },
  {
    date: "12 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_G],
    winner: null,
  },
  {
    date: "19 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_H],
    winner: null,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [TEAM_J, TEAM_K],
    winner: null,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_J],
    winner: null,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_K],
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
    teams: [TEAM_A, TEAM_K],
    winner: null,
  },
];
export const FIVE_MATCHES_PLAYED: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [TEAM_A, TEAM_B],
    winner: TEAM_A,
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [TEAM_C, TEAM_D],
    winner: TEAM_C,
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [TEAM_C, TEAM_B],
    winner: TEAM_C,
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [TEAM_D, TEAM_E],
    winner: TEAM_D,
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_E],
    winner: TEAM_F,
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_D],
    winner: null,
  },
  {
    date: "5 december",
    matchType: "group",
    teams: [TEAM_G, TEAM_H],
    winner: null,
  },
  {
    date: "12 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_G],
    winner: null,
  },
  {
    date: "19 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_H],
    winner: null,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [TEAM_J, TEAM_K],
    winner: null,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_J],
    winner: null,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_K],
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
    teams: [TEAM_A, TEAM_K],
    winner: null,
  },
];
export const ONE_SEMIFINAL_PLAYED: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [TEAM_A, TEAM_B],
    winner: TEAM_A,
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [TEAM_C, TEAM_D],
    winner: TEAM_C,
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [TEAM_C, TEAM_B],
    winner: TEAM_C,
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [TEAM_D, TEAM_E],
    winner: TEAM_D,
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_E],
    winner: TEAM_F,
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_D],
    winner: TEAM_F,
  },
  {
    date: "5 december",
    matchType: "group",
    teams: [TEAM_G, TEAM_H],
    winner: TEAM_G,
  },
  {
    date: "12 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_G],
    winner: TEAM_I,
  },
  {
    date: "19 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_H],
    winner: TEAM_I,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [TEAM_J, TEAM_K],
    winner: TEAM_J,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_J],
    winner: TEAM_L,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_K],
    winner: TEAM_L,
  },
  {
    date: "16/23 januari",
    matchType: "semifinal",
    teams: [TEAM_A, null],
    winner: null,
  },
  {
    date: "30 januari",
    matchType: "final",
    teams: [TEAM_A, TEAM_K],
    winner: null,
  },
];
export const TWO_SEMIFINALS_PLAYED: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [TEAM_A, TEAM_B],
    winner: TEAM_A,
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [TEAM_C, TEAM_D],
    winner: TEAM_C,
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [TEAM_C, TEAM_B],
    winner: TEAM_C,
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [TEAM_D, TEAM_E],
    winner: TEAM_D,
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_E],
    winner: TEAM_F,
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_D],
    winner: TEAM_F,
  },
  {
    date: "5 december",
    matchType: "group",
    teams: [TEAM_G, TEAM_H],
    winner: TEAM_G,
  },
  {
    date: "12 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_G],
    winner: TEAM_I,
  },
  {
    date: "19 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_H],
    winner: TEAM_I,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [TEAM_J, TEAM_K],
    winner: TEAM_J,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_J],
    winner: TEAM_L,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_K],
    winner: TEAM_L,
  },
  {
    date: "16/23 januari",
    matchType: "semifinal",
    teams: [TEAM_A, TEAM_E],
    winner: null,
  },
  {
    date: "30 januari",
    matchType: "final",
    teams: [TEAM_A, TEAM_K],
    winner: null,
  },
];
export const ALL_MATCHES_PLAYED: Match[] = [
  {
    date: "24 oktober",
    matchType: "group",
    teams: [TEAM_A, TEAM_B],
    winner: TEAM_A,
  },
  {
    date: "31 oktober",
    matchType: "group",
    teams: [TEAM_C, TEAM_D],
    winner: TEAM_C,
  },
  {
    date: "7 november",
    matchType: "group",
    teams: [TEAM_C, TEAM_B],
    winner: TEAM_C,
  },
  {
    date: "14 november",
    matchType: "group",
    teams: [TEAM_D, TEAM_E],
    winner: TEAM_D,
  },
  {
    date: "21 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_E],
    winner: TEAM_F,
  },
  {
    date: "28 november",
    matchType: "group",
    teams: [TEAM_F, TEAM_D],
    winner: TEAM_F,
  },
  {
    date: "5 december",
    matchType: "group",
    teams: [TEAM_G, TEAM_H],
    winner: TEAM_G,
  },
  {
    date: "12 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_G],
    winner: TEAM_I,
  },
  {
    date: "19 december",
    matchType: "group",
    teams: [TEAM_I, TEAM_H],
    winner: TEAM_I,
  },
  {
    date: "26 december",
    matchType: "group",
    teams: [TEAM_J, TEAM_K],
    winner: TEAM_J,
  },
  {
    date: "2 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_J],
    winner: TEAM_L,
  },
  {
    date: "9 januari",
    matchType: "group",
    teams: [TEAM_L, TEAM_K],
    winner: TEAM_L,
  },
  {
    date: "16/23 januari",
    matchType: "semifinal",
    teams: [TEAM_A, TEAM_E],
    winner: null,
  },
  {
    date: "30 januari",
    matchType: "final",
    teams: [TEAM_A, TEAM_K],
    winner: TEAM_A,
  },
];
