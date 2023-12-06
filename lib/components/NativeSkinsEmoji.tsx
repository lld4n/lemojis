import React from "react";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";

export default function NativeSkinsEmoji({ index }: { index: string }) {
  return (
    <div className="ac421ee2__emoji-clickable">
      {parseUnified(emojis[index]?.u)}
      <div className="ac421ee2__emoji-skins" />
    </div>
  );
}
