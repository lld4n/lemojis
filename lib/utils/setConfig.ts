import type {
  emojiPickPropsOptionalType,
  emojiPickPropsType,
} from "../types/emoji";

const clickDefault = () => {
  console.log(123);
};

export default function (
  props: emojiPickPropsOptionalType,
): emojiPickPropsType {
  return {
    theme: props.theme || "auto",
    skinTonesEnabled: props.skinTonesEnabled || true,
    searchEnabled: props.searchEnabled || true,
    searchPlaceholder:
      props.searchPlaceholder ||
      (props.language === "en" ? "Search..." : "Поиск..."),
    searchAutoFocus: props.searchAutoFocus || false,
    previewEnabled: props.previewEnabled || true,
    previewConfig: props.previewConfig || {
      defaultCaption:
        props.language === "en" ? "What's Your Mood?" : "Какой ты сегодня?",
      defaultEmoji: "1063",
    },
    height: props.height || 400,
    width: props.width || 300,
    style: props.style || "native",
    custom: props.custom || [],
    language: props.language || "en",
    emojiVersion: props.emojiVersion || "15.0",
    defaultTone: props.defaultTone || "neutral",
    lazyLoad: props.lazyLoad || true,
    click: props.click || clickDefault,
  };
}

export const defaultConfig: emojiPickPropsType = {
  theme: "auto",
  skinTonesEnabled: true,
  searchEnabled: true,
  searchPlaceholder: "Search...",
  searchAutoFocus: false,
  previewEnabled: true,
  previewConfig: {
    defaultCaption: "What's Your Mood?",
    defaultEmoji: "1063",
  },
  height: 400,
  width: 350,
  style: "native",
  custom: [],
  language: "en",
  emojiVersion: "15.0",
  defaultTone: "neutral",
  lazyLoad: true,
  click: clickDefault,
};
