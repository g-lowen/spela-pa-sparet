import { useContext } from "react";
import { SeasonContext, SeasonContextValue } from "./SeasonContext";

export const useSeason = (): SeasonContextValue => {
  const context = useContext(SeasonContext);
  if (context === null) {
    throw new Error("useSeason must be used inside a SeasonProvider");
  }
  return context;
};
