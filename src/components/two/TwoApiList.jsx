import React from "react";
import ItemTwoApi from "./ItemTwoApi";

const TwoApiList = ({ cardArr }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemTwoApi card={card} key={card.id} />
      ))}
    </div>
  );
};

export default TwoApiList;
