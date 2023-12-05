import React from "react";
import Magnifier from "../svgs/Magnifier";
import Cross from "../svgs/Cross";
import { ConfigContext } from "../providers/ConfigProvider";

export default function Search() {
  const [input, setInput] = React.useState("");
  const context = React.useContext(ConfigContext);
  return (
    <div className="ac421ee2__label">
      <Magnifier className="ac421ee2__magnifier" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="ac421ee2__input"
        autoFocus={context.searchAutoFocus}
        placeholder={context.searchPlaceholder}
      />
      {input && (
        <div className="ac421ee2__cross" onClick={() => setInput("")}>
          <Cross />
        </div>
      )}
    </div>
  );
}
