import React from "react";
import { ConfigContext } from "../providers/ConfigProvider";
import { getUrl } from "../utils/getUrl";
import { parseUnified } from "../utils/parseUnified";
import { emojis } from "../data/emojis";
import { WorkingContext } from "../providers/WorkingProvider";

export default function Preview() {
  const context = React.useContext(ConfigContext);
  const working = React.useContext(WorkingContext);
  return (
    <div className="ac421ee2__preview">
      <div className="ac421ee2__preview-emoji">
        {context.style === "native" ? (
          <>{parseUnified(emojis[working?.preview || ""]?.u)}</>
        ) : (
          <img
            src={getUrl(context.style, emojis[working?.preview || ""]?.i)}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
