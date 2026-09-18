export type MatchType = "group" | "semifinal" | "final";

/**
 * Match and Gambler are generic over the season's team union, so each season's
 * data file gets typo protection against its own line-up while the app can work
 * with the loose `string` form. A `Match<Season2025Team>` is assignable to a
 * `Match<string>`, since the team parameter only ever appears in output
 * positions.
 */
export interface Match<TTeam extends string = string> {
  date: string;
  matchType: MatchType;
  teams: [TTeam, TTeam] | [TTeam, null] | null;
  winner: TTeam | null;
}

export type Bet<TTeam extends string = string> =
  | {
      matchType: Exclude<MatchType, "semifinal">;
      winner: TTeam;
    }
  | {
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
