import type { ReactNode } from "react";
import React from "react";
import { defaultConfig } from "../utils/setConfig";
import { workingContext } from "../types/emoji";
import { ConfigContext } from "./ConfigProvider";
export const WorkingContext = React.createContext<workingContext | null>(null);
export default function WorkingProvider({ children }: { children: ReactNode }) {
  const context = React.useContext(ConfigContext);
  const [preview, setPreview] = React.useState(
    context.previewConfig.defaultEmoji,
  );
  return (
    <WorkingContext.Provider
      value={{
        preview,
        setPreview,
      }}
    >
      {children}
    </WorkingContext.Provider>
  );
}
