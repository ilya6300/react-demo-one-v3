import React from "react";

const ItemApiTiles = (props) => {
  return (
    <div className={props.card.className} >
      <div className="card-container-one-section">
        <div className="card-info">
          <p>name: {props.card.first_name}</p>
          <p>online status: {props.card.status}</p>
          <p>home animal: {props.card.home_animal}</p>
          <p>name animal: {props.card.name_animal}</p>
          <p>
            age: {props.card.age}
            <button
              className="card-container-submenu-name-animal-btn"
              onClick={() => props.targetcard(props.card)}
              // onClick={props.targetcard}
            >
              Сменить возраст
            </button>
          </p>
        </div>
        <div>
          <img className="card-avatar" src={props.card.avatar} />
        </div>
      </div>
    </div>
  );
};

export default ItemApiTiles;
