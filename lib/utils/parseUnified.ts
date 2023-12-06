export function parseUnified(unified: string | undefined): string {
  if (unified) {
    return unified
      .split("-")
      .map((hex) => String.fromCodePoint(parseInt(hex, 16)))
      .join("");
  }
  return "";
}
