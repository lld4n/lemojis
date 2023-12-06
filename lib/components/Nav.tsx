import React from "react";
import Search from "./Search";
import { ConfigContext } from "../providers/ConfigProvider";

export default function Nav() {
  const context = React.useContext(ConfigContext);
  if (context.searchEnabled) {
    return (
      <div className="ac421ee2__nav">
        {context.searchEnabled && <Search />}
        {/*{context.skinTonesEnabled && <Skins />}*/}
      </div>
    );
  } else {
    return <></>;
  }
}
