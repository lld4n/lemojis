import React from "react";
import ConfigProvider from "./providers/ConfigProvider";
import type { emojiPickPropsOptionalType } from "./types/emoji";
import setConfig from "./utils/setConfig";
import Wrapper from "./components/Wrapper";
import Category from "./components/Category";
import Nav from "./components/Nav";
import List from "./components/List";
import Preview from "./components/Preview";
import "./styles/index.css";
export default function Lemojis(props: emojiPickPropsOptionalType) {
  const reformatProps = setConfig(props);
  return (
    <ConfigProvider props={reformatProps}>
      <Wrapper>
        <Category />
        <Nav />
        <List />
        {reformatProps.previewEnabled && <Preview />}
      </Wrapper>
    </ConfigProvider>
  );
}
