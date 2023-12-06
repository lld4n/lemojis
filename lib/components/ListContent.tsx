import React from "react";
import { category } from "../data/category";
import Emoji from "./Emoji";
import type { categoryType } from "../types/emoji";
import { useInView } from "react-intersection-observer";
import { WorkingContext } from "../providers/WorkingProvider";

export default function ListContent({ title }: { title: categoryType }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const working = React.useContext(WorkingContext);
  React.useEffect(() => {
    if (inView) {
      working?.setTab(title);
    }
  }, [inView]);

  return (
    <div key={title} className="ac421ee2__list-content" ref={ref}>
      {category[title].map((e) => {
        return <Emoji index={e} key={e} />;
      })}
    </div>
  );
}
