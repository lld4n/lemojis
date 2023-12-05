import React from "react";
import { categoryList } from "../svgs/categoryList";
import { category } from "../data/category";
import { emojis } from "../data/emojis";

export default function List() {
  return (
    <div className="ac421ee2__list">
      {categoryList.map((el) => {
        return Object.keys(category[el.title] || {}).map((key) => {
          return (
            <div className="ac421ee2__list-item" key={key}>
              {category[el.title]?.[key]?.map((ee) => {
                return (
                  <img
                    width={30}
                    src={
                      "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/" +
                      emojis[ee]?.i
                    }
                  />
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
}
