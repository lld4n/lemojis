import React from "react";
import { emojis } from "../data/emojis";
import { parseUnified } from "../utils/parseUnified";
import NativeSkinsEmoji from "./NativeSkinsEmoji";
import { ConfigContext } from "../providers/ConfigProvider";

export default function NativeEmoji({ index }: { index: string }) {
  const context = React.useContext(ConfigContext);
  if (emojis[index] === undefined) {
    return <></>;
  }

  if (emojis[index]?.s) {
    return <NativeSkinsEmoji index={index} />;
  }
  return (
    <div
      className="ac421ee2__emoji-clickable"
      onClick={() => context.click({ unified: emojis[index]?.u || "" })}
    >
      {parseUnified(emojis[index]?.u)}
    </div>
  );
}
