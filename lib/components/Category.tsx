import React from "react";
import { categoryList } from "../svgs/categoryList";
import Question from "../svgs/Question";
import { ConfigContext } from "../providers/ConfigProvider";
import { WorkingContext } from "../providers/WorkingProvider";

export default function Category() {
  const context = React.useContext(ConfigContext);
  const working = React.useContext(WorkingContext);
  return (
    <div className="ac421ee2__category">
      {context.custom.length > 0 ?? (
        <div className="ac421ee2__category-item">
          <Question />
        </div>
      )}

      {categoryList.map((el) => {
        const SVG = el.svg;
        return (
          <div
            key={el.title}
            className={
              working?.tab === el.title
                ? "ac421ee2__category-item active"
                : "ac421ee2__category-item"
            }
          >
            <SVG />
          </div>
        );
      })}
    </div>
  );
}
