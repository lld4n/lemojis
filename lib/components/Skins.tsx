import React from "react";
const skins = [
  "#FACA49",
  "#F6D8B6",
  "#D4AC86",
  "#AA7D5C",
  "#875836",
  "#4F3E34",
];
export default function Skins() {
  const [index, setIndex] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);
  return (
    <div className="ac421ee2__skins">
      {clicked ? (
        <>
          {skins.map((el, i) => {
            return (
              <div
                key={el}
                className="ac421ee2__skins-item"
                style={{
                  backgroundColor: el,
                }}
                onClick={() => {
                  setClicked(false);
                  setIndex(i);
                }}
              />
            );
          })}
        </>
      ) : (
        <div
          className="ac421ee2__skins-item"
          onClick={() => setClicked(true)}
          style={{
            backgroundColor: skins[index],
          }}
        />
      )}
    </div>
  );
}
