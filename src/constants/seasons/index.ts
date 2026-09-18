import { Season } from "../../types";
import { GAMBLERS as GAMBLERS_2025 } from "./season-2025/gamblers";
import { MATCHES as MATCHES_2025 } from "./season-2025/matches";
import { GAMBLERS as GAMBLERS_2026 } from "./season-2026/gamblers";
import { MATCHES as MATCHES_2026 } from "./season-2026/matches";

/** Oldest first; the selector and the default-season logic both rely on this order. */
export const SEASONS: Season[] = [
  {
    id: "2025",
    label: "2025/2026",
    matches: MATCHES_2025,
    gamblers: GAMBLERS_2025,
  },
  {
    id: "2026",
    label: "2026/2027",
    matches: MATCHES_2026,
    gamblers: GAMBLERS_2026,
  },
];

/**
 * The newest season that actually has matches, so the app never opens on an
 * empty page while next season is still being filled in.
 */
export const getDefaultSeason = (): Season => {
  const withMatches = SEASONS.filter((season) => season.matches.length > 0);
  return withMatches[withMatches.length - 1] ?? SEASONS[SEASONS.length - 1];
};

export const getSeasonById = (id: string): Season | undefined =>
  SEASONS.find((season) => season.id === id);
