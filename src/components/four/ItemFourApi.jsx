import React, { useState } from "react";
import cl from "./ShowSubMenu.module.css";

const ItemFourApi = (props) => {
  const [classSubMenu, setClassSubMenu] = useState(cl.hidden);
  const submenuContainerShow = () => {
    if (classSubMenu !== cl.cardContainerSubmenuContainer) {
      setClassSubMenu(cl.cardContainerSubmenuContainer);
    } else {
      setClassSubMenu(cl.cardContainerSubmenuContainerHidden);
    }
  };

  return (
    <div className="card">
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
              Сменить имя:
              <input
                className="card-container-submenu-name-animal-input"
                placeholder="Новое имя животного"
              />
              <button className="card-container-submenu-name-animal-btn">
                Ввод
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFourApi;
