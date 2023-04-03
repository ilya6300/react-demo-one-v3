import React from "react";

const ItemTwoApi = (props) => {
  return (
    <div className="card">
      <div className="card-info">
        {/* <p>name: {props.card.name}</p> */}
        <p>name: {props.card.name}</p>
        <p>username: {props.card.username}</p>
        <p>email: {props.card.email}</p>
      </div>
      <div>
        <img className="card-avatar" src={props.card.avatar} />
      </div>
      <div className="card-container-submenu-section">
        <nav className="card-container-submenu-nav">
          <div className="nav-border"></div>
          <div className="nav-btn-submenu">MENU</div>
          <div className="nav-border"></div>
        </nav>
        <div>
          <p>home animal: {props.card.home_animal}</p>
          <div className="card-container-submenu-name-animal">
            <p>name animal: {props.card.name_animal}</p>
            <p>
              age: {props.card.age}
              <button
                className="card-container-submenu-name-animal-btn"
                onClick={() => props.targetcard(props.card)}
              >
                Сменить возрост
              </button>
            </p>
            {/* <p>
              Сменить имя:
              <input
                // value={nameValue}
                className="card-container-submenu-name-animal-input"
                placeholder="Новое имя животного"
                type="text"
                onChange={props.onChange}
              />
              <button
                className="card-container-submenu-name-animal-btn"
                onClick={() => props.onClick(props.card)}
              >
                Ввод
              </button>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTwoApi;
