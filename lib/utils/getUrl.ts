const apple =
  "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/";
const facebook =
  "https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/";
const twitter =
  "https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/";
const google =
  "https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";
export function getUrl(
  style: "apple" | "google" | "twitter" | "facebook",
  image: string | undefined,
): string {
  if (style === "apple") {
    return apple + image;
  }
  if (style === "google") {
    return google + image;
  }
  if (style === "facebook") {
    return facebook + image;
  }
  if (style === "twitter") {
    return twitter + image;
  }
  return "";
}
