import React from "react";
import ItemFourApi from "./ItemFourApi";

const FourApiList = ({ cardArr, targetcard }) => {

  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemFourApi card={card} key={card.id} 

        targetcard={targetcard}
        />
      ))}
    </div>
  );
};

export default FourApiList;
