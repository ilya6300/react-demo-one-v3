import React from "react";
import ItemOneApi from "./ItemOneApi";

const OneApiList = ({ cardArr }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemOneApi card={card} key={card.id} />
      ))}
    </div>
  );
};

export default OneApiList;
