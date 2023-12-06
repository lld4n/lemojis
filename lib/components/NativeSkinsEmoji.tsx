import React from "react";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";
import { ConfigContext } from "../providers/ConfigProvider";
import { WorkingContext } from "../providers/WorkingProvider";

export default function NativeSkinsEmoji({ index }: { index: string }) {
  const context = React.useContext(ConfigContext);
  const working = React.useContext(WorkingContext);
  return (
    <div
      className="ac421ee2__emoji-clickable"
      onClick={() => context.click({ unified: emojis[index]?.u || "" })}
      onMouseEnter={() => working?.setPreview(index)}
    >
      {parseUnified(emojis[index]?.u)}
      <div className="ac421ee2__emoji-skins" />
    </div>
  );
}
