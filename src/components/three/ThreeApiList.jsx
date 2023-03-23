import React from "react";
import ItemThreeApi from "./ItemThreeApi";

const ThreeApiList = ({ cardArr }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemThreeApi card={card} key={card.id} />
      ))}
    </div>
  );
};

export default ThreeApiList;
