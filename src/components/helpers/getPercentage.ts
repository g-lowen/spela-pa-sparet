export function getPercentage(val1: number, val2: number): string {
  const value = ((val1 / val2) * 100).toFixed(0);
  if (value === "0") {
    return "";
  }
  return `${value} %`;
}
