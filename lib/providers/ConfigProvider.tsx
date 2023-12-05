import type { ReactNode } from "react";
import React from "react";
import type { emojiPickPropsType } from "../types/emoji";
import { defaultConfig } from "../utils/setConfig";
export const ConfigContext =
  React.createContext<emojiPickPropsType>(defaultConfig);
export default function ConfigProvider({
  children,
  props,
}: {
  children: ReactNode;
  props: emojiPickPropsType;
}) {
  console.log(props);
  return (
    <ConfigContext.Provider value={props}>{children}</ConfigContext.Provider>
  );
}
