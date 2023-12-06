import React from "react";
import { ConfigContext } from "../providers/ConfigProvider";
import { emojis } from "../data/emojis";
import NativeEmoji from "./NativeEmoji";
import { getUrl } from "../utils/getUrl";
import SkinsEmoji from "./SkinsEmoji";
import { parseUnified } from "../utils/parseUnified";

export default function Emoji({ index }: { index: string }) {
  const context = React.useContext(ConfigContext);
  if (emojis[index] === undefined) {
    return <></>;
  }
  if (context.style === "native") {
    return <NativeEmoji index={index} />;
  }
  if (
    (context.style === "apple" && !emojis[index]?.h[0]) ||
    (context.style === "google" && !emojis[index]?.h[1]) ||
    (context.style === "facebook" && !emojis[index]?.h[2]) ||
    (context.style === "twitter" && !emojis[index]?.h[3])
  )
    return <></>;

  if (emojis[index]?.s) {
    return <SkinsEmoji index={index} />;
  }

  return (
    <div className="ac421ee2__emoji-clickable" role="button">
      <img
        className="ac421ee2__emoji-img"
        loading={context.lazyLoad ? "lazy" : "eager"}
        src={getUrl(context.style, emojis[index]?.i)}
        alt={parseUnified(emojis[index]?.u)}
      />
    </div>
  );
}
