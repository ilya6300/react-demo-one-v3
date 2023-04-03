import React from "react";
import ItemTwoApi from "./ItemTwoApi";

const TwoApiList = ({ cardArr, targetcard }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemTwoApi card={card} key={card.id} targetcard={targetcard}
        />
      ))}
    </div>
  );
};

export default TwoApiList;
