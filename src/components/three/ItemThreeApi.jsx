import React from "react";

const ItemOneApi = (props) => {
  return (
    <div className="card">
      <div className="card-info">
        {/* <p>name: {props.card.name}</p> */}
        <p>name: {props.card.first_name}</p>
        <p>username: {props.card.last_name}</p>
        <p>email: {props.card.email}</p>
      </div>
      <div>
        <img className="card-avatar" src={props.card.avatar} />
      </div>
    </div>
  );
};

export default ItemOneApi;
