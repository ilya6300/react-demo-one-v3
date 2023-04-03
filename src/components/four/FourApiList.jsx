import React from "react";
import ItemFourApi from "./ItemFourApi";

const FourApiList = ({ cardArr, onChange, onClick, targetcard }) => {

  return (
    <div className="lilichka-good">
      {cardArr.map((card) => (
        <ItemFourApi card={card} key={card.id} 
        // onChange={onChange}
        // onClick={onClick}
        targetcard={targetcard}
        />
      ))}
    </div>
  );
};

export default FourApiList;
