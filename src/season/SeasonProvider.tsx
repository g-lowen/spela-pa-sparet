import { ReactNode, useMemo, useState } from "react";
import { getDefaultSeason, getSeasonById } from "../constants/seasons";
import { SeasonContext } from "./SeasonContext";

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [seasonId, setSeasonId] = useState(() => getDefaultSeason().id);

  const value = useMemo(() => {
    const season = getSeasonById(seasonId) ?? getDefaultSeason();
    return { season, seasonId: season.id, setSeasonId };
  }, [seasonId]);

  return (
    <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>
  );
};
