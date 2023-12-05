import React from "react";
import Magnifier from "../svgs/Magnifier";
import Cross from "../svgs/Cross";
import { ConfigContext } from "../providers/ConfigProvider";

export default function Search() {
  const context = React.useContext(ConfigContext);
  return (
    <label className="ac421ee2__label">
      <Magnifier />
      <input
        type="text"
        className="ac421ee2__input"
        autoFocus={context.searchAutoFocus}
        placeholder={context.searchPlaceholder}
      />
      <Cross />
    </label>
  );
}
