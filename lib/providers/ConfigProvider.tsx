import React, { ReactNode } from "react";
import {emojiPickPropsType} from "../types/emoji";
import {defaultConfig} from "../utils/setConfig";
const ConfigContext = React.createContext<emojiPickPropsType>(defaultConfig);
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
