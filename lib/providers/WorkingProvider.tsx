import type { ReactNode } from "react";
import React from "react";
import type { categoryType, workingContext } from "../types/emoji";
import { ConfigContext } from "./ConfigProvider";
export const WorkingContext = React.createContext<workingContext | null>(null);
export default function WorkingProvider({ children }: { children: ReactNode }) {
  const context = React.useContext(ConfigContext);
  const [tab, setTab] = React.useState<categoryType>("Smileys & Emotion");
  const [preview, setPreview] = React.useState(context.previewConfig);
  return (
    <WorkingContext.Provider
      value={{
        preview,
        setPreview,
        tab,
        setTab,
      }}
    >
      {children}
    </WorkingContext.Provider>
  );
}
