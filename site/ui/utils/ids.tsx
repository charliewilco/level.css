export function makeId(...args: (string | number | null | undefined)[]) {
  return args.filter((val) => val != null).join("--");
}
