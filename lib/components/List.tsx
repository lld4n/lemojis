import React from "react";
import { categoryList } from "../svgs/categoryList";
import { category } from "../data/category";
import { emojis } from "../data/emojis";
import Emoji from "./Emoji";

export default function List() {
  return (
    <div className="ac421ee2__list">
      {categoryList.map((el) => {
        return (
          <div key={el.title} className="ac421ee2__list-item">
            <div className="ac421ee2__list-title">{el.title}</div>
            <div key={el.title} className="ac421ee2__list-content">
              {category[el.title].map((e) => {
                return <Emoji index={e} key={e} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
