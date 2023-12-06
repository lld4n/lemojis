import React from "react";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";
import { getUrl } from "../utils/getUrl";
import { ConfigContext } from "../providers/ConfigProvider";

export default function SkinsEmoji({ index }: { index: string }) {
  const context = React.useContext(ConfigContext);
  if (context.style === "native") {
    return <></>;
  }
  return (
    <div
      className="ac421ee2__emoji-clickable"
      onClick={() => context.click({ unified: emojis[index]?.u || "" })}
    >
      <img
        className="ac421ee2__emoji-img"
        loading={context.lazyLoad ? "lazy" : "eager"}
        src={getUrl(context.style, emojis[index]?.i)}
        alt={parseUnified(emojis[index]?.u)}
      />
      <div className="ac421ee2__emoji-skins" />
    </div>
  );
}
