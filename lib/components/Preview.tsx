import React from "react";
import { ConfigContext } from "../providers/ConfigProvider";
import { getUrl } from "../utils/getUrl";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";

export default function Preview() {
  const context = React.useContext(ConfigContext);
  return (
    <div className="ac421ee2__preview">
      <div className="ac421ee2__preview-emoji">
        {context.style === "native" ? (
          <>{parseUnified(context.previewConfig.defaultEmoji)}</>
        ) : (
          <img
            src={getUrl(
              context.style,
              emojis[context.previewConfig.defaultEmoji]?.i,
            )}
            alt=""
          />
        )}
      </div>

      <div className="ac421ee2__preview-text">
        {context.previewConfig.defaultCaption}
      </div>
    </div>
  );
}
