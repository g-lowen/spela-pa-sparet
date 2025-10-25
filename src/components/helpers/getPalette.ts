import {
  HALLOWEEN_PALETTE,
  CHRISTMAS_PALETTE,
  LATE_AUTUMN_PALETTE,
  WINTER_PALETTE,
  SPRING_PALETTE,
  SUMMER_PALETTE,
  EARLY_AUTUMN_PALETTE,
} from "../../constants/palette";

export const getPalette = (): string[] | undefined => {
  const today = new Date();
  const month = today.getMonth(); // 0-11 (0=Jan, 11=Dec)
  const day = today.getDate();

  // Halloween: October 1 - November 15
  if (month === 9 || (month === 10 && day <= 15)) {
    return HALLOWEEN_PALETTE;
  }

  // Late Autumn: November 16 - December 11
  if ((month === 10 && day >= 16) || (month === 11 && day <= 11)) {
    return LATE_AUTUMN_PALETTE;
  }

  // Christmas: December 12 - January 6
  if ((month === 11 && day >= 12) || (month === 0 && day <= 6)) {
    return CHRISTMAS_PALETTE;
  }

  // Winter: January 7 - February
  if ((month === 0 && day >= 7) || month === 1) {
    return WINTER_PALETTE;
  }

  // Spring: March - May
  if (month >= 2 && month <= 4) {
    return SPRING_PALETTE;
  }

  // Summer: June - August
  if (month >= 5 && month <= 7) {
    return SUMMER_PALETTE;
  }

  // Early Autumn: September
  if (month === 8) {
    return EARLY_AUTUMN_PALETTE;
  }
};
