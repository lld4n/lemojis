import type { ReactNode } from "react";
import React from "react";
import { ConfigContext } from "../providers/ConfigProvider";

export default function Wrapper({ children }: { children: ReactNode }) {
  const context = React.useContext(ConfigContext);
  return (
    <div
      className="ac421ee2"
      data-theme={
        context.theme === "auto"
          ? ""
          : context.theme === "dark"
            ? "dark"
            : "light"
      }
      style={{
        width: context.width,
        height: context.height,
      }}
    >
      {children}
    </div>
  );
}
