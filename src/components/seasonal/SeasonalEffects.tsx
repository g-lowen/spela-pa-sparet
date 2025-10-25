import { FlyingBats } from "./FlyingBats";
import { isChristmas, isHalloween } from "./functions/seasonal";

export const SeasonalEffects = () => {
  return (
    <>
      {isHalloween() && <FlyingBats />}
      {isChristmas() && <FlyingBats />}
    </>
  );
};
