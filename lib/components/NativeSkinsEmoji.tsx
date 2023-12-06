import React from "react";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";
import { ConfigContext } from "../providers/ConfigProvider";

export default function NativeSkinsEmoji({ index }: { index: string }) {
  const context = React.useContext(ConfigContext);
  return (
    <div
      className="ac421ee2__emoji-clickable"
      onClick={() => context.click({ unified: emojis[index]?.u || "" })}
    >
      {parseUnified(emojis[index]?.u)}
      <div className="ac421ee2__emoji-skins" />
    </div>
  );
}
