import React, { useState } from "react";
import cl from "./ShowSubMenu.module.css";

const ItemFourApi = (props) => {
  const [nameValue, setNameValue] = useState("");

  const [classSubMenu, setClassSubMenu] = useState(cl.hidden);

  const submenuContainerShow = () => {
    setNameValue("");
    if (classSubMenu !== cl.cardContainerSubmenuContainer) {
      setClassSubMenu(cl.cardContainerSubmenuContainer);
    } else {
      setClassSubMenu(cl.cardContainerSubmenuContainerHidden);
    }
  };



  return (
    <div className={props.card.className}>
      <div className="card-container-one-section">
        <div className="card-info">
          <p>name: {props.card.first_name}</p>
          <p>online status: {props.card.status}</p>
          <p>username: {props.card.last_name}</p>
          <p>email: {props.card.email}</p>
        </div>
        <div>
          <img className="card-avatar" src={props.card.avatar} />
        </div>
      </div>
      <div className="card-container-submenu-section">
        <nav className="card-container-submenu-nav">
          <div className="nav-border"></div>
          <div className="nav-btn-submenu" onClick={submenuContainerShow}>
            MENU
          </div>
          <div className="nav-border"></div>
        </nav>
        <div className={classSubMenu}>
          <p>home animal: {props.card.home_animal}</p>
          <div className="card-container-submenu-name-animal">
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
        </div>
      </div>
    </div>
  );
};

export default ItemFourApi;
