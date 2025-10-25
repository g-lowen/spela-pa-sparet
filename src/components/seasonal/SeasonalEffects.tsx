import { FlyingBats } from "./FlyingBats";
import { isChristmas, isHalloween } from "./functions/seasonal";
import Snowfall from "react-snowfall";
import { useColorScheme } from "@mui/material";

export const SeasonalEffects = () => {
  const { mode } = useColorScheme();

  return (
    <>
      {isHalloween() && <FlyingBats />}
      {isChristmas() && (
        <Snowfall
          color={mode === "dark" ? "snow" : "#dee4fd"}
          snowflakeCount={50}
        />
      )}
    </>
  );
};
