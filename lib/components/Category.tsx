import React from "react";
import { categoryList } from "../svgs/categoryList";
import Recently from "../svgs/Recently";
import Question from "../svgs/Question";

export default function Category() {
  return (
    <div className="ac421ee2__category">
      <div className="ac421ee2__category-item ">
        <Recently />
      </div>
      <div className="ac421ee2__category-item active">
        <Question />
      </div>
      {categoryList.map((el) => {
        const SVG = el.svg;
        return (
          <div key={el.title} className="ac421ee2__category-item">
            <SVG />
          </div>
        );
      })}
    </div>
  );
}
