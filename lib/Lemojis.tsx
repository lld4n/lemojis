import React from 'react'
import ConfigProvider from "./providers/ConfigProvider";
import type {emojiPickPropsOptionalType} from "./types/emoji";
import setConfig from "./utils/setConfig";

export default function Lemojis(props: emojiPickPropsOptionalType) {
  const reformatProps = setConfig(props);
  return (
    <ConfigProvider props={reformatProps}>
      123
    </ConfigProvider>
  )
}
