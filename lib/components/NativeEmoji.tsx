import React from "react";
import { emojis } from "../data/emojis";
import { parseUnified } from "../utils/parseUnified";
import NativeSkinsEmoji from "./NativeSkinsEmoji";

export default function NativeEmoji({ index }: { index: string }) {
  if (emojis[index] === undefined) {
    return <></>;
  }

  if (emojis[index]?.s) {
    return <NativeSkinsEmoji index={index} />;
  }
  return (
    <div className="ac421ee2__emoji-clickable">
      {parseUnified(emojis[index]?.u)}
    </div>
  );
}
