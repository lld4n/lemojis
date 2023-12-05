import Smile from "./Smile";
import People from "./People";
import Animals from "./Animals";
import Car from "./Car";
import Activity from "./Activity";
import Objects from "./Objects";
import Symbols from "./Symbols";
import Flag from "./Flag";
import Carrot from "./Carrot";

import type { FC } from "react";
export const categoryList: {
  title: string;
  svg: FC;
}[] = [
  { title: "Smileys & Emotion", svg: Smile },
  { title: "People & Body", svg: People },
  { title: "Animals & Nature", svg: Animals },
  { title: "Travel & Places", svg: Car },
  { title: "Activities", svg: Activity },
  { title: "Food & Drink", svg: Carrot },
  { title: "Objects", svg: Objects },
  { title: "Symbols", svg: Symbols },
  { title: "Flags", svg: Flag },
];
