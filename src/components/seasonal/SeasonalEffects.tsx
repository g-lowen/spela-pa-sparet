import { FlyingBats } from "./FlyingBats";
import { isHalloween } from "./functions/seasonal";

export const SeasonalEffects = () => {
  return <>{isHalloween() && <FlyingBats />}</>;
};
