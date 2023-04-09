import React from "react";
import ItemFourApi from "./ItemFourApi";
import ItemApiTiles from "./ItemApiTiles";

const FourApiList = ({ cardArr, targetcard, list }) => {
  return (
    <div className="lilichka-good">
      {list ? (
        cardArr.map((card) => (
          <ItemFourApi card={card} key={card.id} targetcard={targetcard} />
        ))
      ) : (
        cardArr.map((card) => (
          <ItemApiTiles card={card} key={card.id} targetcard={targetcard} />
        ))
      )}
    </div>
  );
};

export default FourApiList;
