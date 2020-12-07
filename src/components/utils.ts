export const PASSION_LEVELS = ['Very High', 'High', 'Medium', 'Low'];

export function isNumber(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
