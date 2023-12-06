import type {
  emojiPickPropsOptionalType,
  emojiPickPropsType,
  emojiReturnType,
} from "../types/emoji";

const clickDefault = (emoji: emojiReturnType) => {
  console.log(emoji.unified);
};

export default function (
  props: emojiPickPropsOptionalType,
): emojiPickPropsType {
  console.log("original", props);
  return {
    theme: props.theme ?? "auto",
    // skinTonesEnabled: props.skinTonesEnabled ?? true,
    searchEnabled: props.searchEnabled ?? true,
    searchPlaceholder: props.searchPlaceholder ?? "Search...",
    searchAutoFocus: props.searchAutoFocus ?? false,
    previewEnabled: props.previewEnabled ?? true,
    previewConfig: props.previewConfig ?? "1063",
    height: props.height ?? 400,
    width: props.width ?? 350,
    style: props.style ?? "native",
    custom: props.custom ?? [],
    // language: props.language ?? "en",
    emojiVersion: props.emojiVersion ?? "15.0",
    // defaultTone: props.defaultTone ?? "neutral",
    lazyLoad: props.lazyLoad ?? true,
    click: props.click ?? clickDefault,
  };
}

export const defaultConfig: emojiPickPropsType = {
  theme: "auto",
  // skinTonesEnabled: true,
  searchEnabled: true,
  searchPlaceholder: "Search...",
  searchAutoFocus: false,
  previewEnabled: true,
  previewConfig: "1063",
  height: 400,
  width: 350,
  style: "native",
  custom: [],
  // language: "en",
  emojiVersion: "15.0",
  // defaultTone: "neutral",
  lazyLoad: true,
  click: clickDefault,
};
