import React from "react";

export default function Category() {
  return (
    <div className="ac421ee2__category">
      {new Array(8).fill(0).map((el, i) => {
        return <div key={i} className="ac421ee2__category-item"></div>;
      })}
    </div>
  );
}
