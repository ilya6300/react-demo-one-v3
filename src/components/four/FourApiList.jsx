import React from "react";
import ItemFourApi from "./ItemFourApi";

const FourApiList = ({ cardArr }) => {
  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemFourApi card={card} key={card.id} />
      ))}
    </div>
  );
};

export default FourApiList;
