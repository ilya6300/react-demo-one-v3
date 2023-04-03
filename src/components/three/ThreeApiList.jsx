import React from "react";
import ItemThreeApi from "./ItemThreeApi";

const ThreeApiList = ({ cardArr, onChange, onClick }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemThreeApi
          card={card}
          key={card.id}
          // onClick={onClick}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ThreeApiList;
