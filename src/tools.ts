export const array = Array.from;

export const entries = Object.entries;

export function naturals(count: number) {
  return array(Array(count).keys());
}
