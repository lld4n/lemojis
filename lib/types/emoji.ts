import React from "react";

export interface emojiReturnType {
  unified: string;
}

export interface emojiPickPropsType {
  theme: emojiPickThemeType;
  // skinTonesEnabled: boolean;
  searchEnabled: boolean;
  searchPlaceholder: string;
  searchAutoFocus: boolean;
  previewEnabled: boolean;
  previewConfig: string;
  height: number;
  width: number;
  style: emojiPickStyleType;
  custom: emojiPickCustomType[];
  // language: emojiPickLanguageType;
  emojiVersion: string;
  // defaultTone: emojiPickToneType;
  lazyLoad: boolean;
  click: (emoji: emojiReturnType) => void;
}

export type emojiPickPropsOptionalType = Partial<emojiPickPropsType>;

export interface emojiPickPreviewConfig {
  defaultEmoji: string;
  defaultCaption: string;
}

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

export type categoryType =
  | "Smileys & Emotion"
  | "People & Body"
  | "Animals & Nature"
  | "Travel & Places"
  | "Activities"
  | "Food & Drink"
  | "Objects"
  | "Symbols"
  | "Flags";

export type workingContext = {
  preview: string;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
  tab: categoryType;
  setTab: React.Dispatch<React.SetStateAction<categoryType>>;
};
