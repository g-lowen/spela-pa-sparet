import { createContext } from "react";
import { Season } from "../types";

export interface SeasonContextValue {
  season: Season;
  seasonId: string;
  setSeasonId: (id: string) => void;
}

export const SeasonContext = createContext<SeasonContextValue | null>(null);
