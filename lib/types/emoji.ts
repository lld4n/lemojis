export interface emojiPickPropsType {
  theme: emojiPickThemeType;
  skinTonesEnabled: boolean;
  searchEnabled: boolean;
  searchPlaceholder: string;
  searchAutoFocus: boolean;
  previewEnabled: boolean;
  previewConfig: emojiPickPreviewConfig;
  height: emojiPickSizeType;
  width: emojiPickSizeType;
  style: emojiPickStyleType;
  custom: emojiPickCustomType[];
  language: emojiPickLanguageType;
  emojiVersion: string;
  defaultTone: emojiPickToneType;
  lazyLoad: boolean;
  recently: string[];
  click: () => void;
}

export type emojiPickPropsOptionalType = Partial<emojiPickPropsType>;

export interface emojiPickPreviewConfig {
  defaultEmoji: number;
  defaultCaption: string;
}

export type emojiPickSizeType = string | number;

export type emojiPickToneType =
  | "neutral"
  | "light"
  | "medium_light"
  | "medium"
  | "medium_dark"
  | "dark";

export type emojiPickThemeType = "auto" | "light" | "dark";

export type emojiPickStyleType =
  | "native"
  | "apple"
  | "google"
  | "twitter"
  | "facebook";

export type emojiPickLanguageType = "ru" | "en";
export interface emojiPickCustomType {
  url: string;
  snippet: string;
}
