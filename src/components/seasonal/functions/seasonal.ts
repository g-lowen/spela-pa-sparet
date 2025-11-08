// Halloween: October 1 - November 7
export function isHalloween() {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  return month === 9 || (month === 10 && day <= 7);
}

// Christmas: December 4 - January 6
export function isChristmas() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  return (month === 11 && day >= 4) || (month === 0 && day <= 6);
}
