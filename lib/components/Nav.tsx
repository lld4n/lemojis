import React from "react";
import Search from "./Search";
import { ConfigContext } from "../providers/ConfigProvider";
import Skins from "./Skins";

export default function Nav() {
  const context = React.useContext(ConfigContext);
  if (context.searchEnabled || context.skinTonesEnabled) {
    return (
      <div className="ac421ee2__nav">
        {context.searchEnabled && <Search />}
        {context.skinTonesEnabled && <Skins />}
      </div>
    );
  } else {
    return <></>;
  }
}
