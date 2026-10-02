export type MatchType = "group" | "semifinal" | "final";

/**
 * One id per question on the bets form. Group ids are "grupp-<group>-<match>",
 * so they describe the fixture rather than the broadcast slot. Both semifinals
 * share one id, as they share one Match and one bet.
 */
export type MatchId =
  | `grupp-${1 | 2 | 3 | 4}-${1 | 2 | 3}`
  | "semifinal"
  | "final";

/**
 * Match and Gambler are generic over the season's team union, so each season's
 * data file gets typo protection against its own line-up while the app can work
 * with the loose `string` form. A `Match<Season2025Team>` is assignable to a
 * `Match<string>`, since the team parameter only ever appears in output
 * positions.
 */
export interface Match<TTeam extends string = string> {
  /**
   * Identifies which fixture this is, independent of where it sits in the
   * list: "grupp-1-2" is group one's second match whichever week it airs.
   * Bets point at this rather than at an array position, so matches can be
   * reordered or redated without touching anybody's bets.
   */
  id: MatchId;
  date: string;
  matchType: MatchType;
  teams: [TTeam, TTeam] | [TTeam, null] | null;
  winner: TTeam | null;
}

export type Bet<TTeam extends string = string> =
  | {
      matchId: MatchId;
      matchType: Exclude<MatchType, "semifinal">;
      winner: TTeam;
    }
  | {
      matchId: MatchId;
      matchType: Extract<MatchType, "semifinal">;
      semifinalFirst: TTeam;
      semifinalSecond: TTeam;
    };

export interface Gambler<TTeam extends string = string> {
  name: string;
  bets: Bet<TTeam>[];
}

export interface Season {
  /** Stable key used for the selector value and for persistence. */
  id: string;
  /** What the selector shows, e.g. "2025/2026". */
  label: string;
  matches: Match[];
  gamblers: Gambler[];
}
