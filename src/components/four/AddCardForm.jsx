import React, { useState } from "react";
import cl from "./ShowSubMenu.module.css";

const AddCardForm = ({ cardArr, create }) => {
  const [idCard, setIdCard] = useState(cardArr.length + 1);
  const [firstName, setFirstName] = useState("");
  const [nameAnimal, setNameAnimal] = useState("");
  const [cardObj, setCardObj] = useState({
    first_name: "",
    status: "online",
    last_name: "YouSuperMan",
    email: "New_User@mail.ru",
    home_animal: "Dog",
    name_animal: "",
    age: "",
    avatar:
      "https://krasivosti.pro/uploads/posts/2021-07/1625765835_19-krasivosti-pro-p-khaski-sobaka-s-raznimi-glazami-sobaki-kra-21.png",
  });

  const addNewCard = (e) => {
    // setIdCard()
    e.preventDefault();
    const newCard = {
      ...cardObj,
      id: idCard,
      first_name: firstName,
      // status: "online",
      // last_name: "YouSuperMan",
      // email: "New_User@mail.ru",
      // home_animal: "Dog",
      name_animal: nameAnimal,
      age: "junior",
      // avatar:
      //   "https://krasivosti.pro/uploads/posts/2021-07/1625765835_19-krasivosti-pro-p-khaski-sobaka-s-raznimi-glazami-sobaki-kra-21.png",
      // key: idCard,
    };
    if (firstName === "" || nameAnimal === "") {
      console.log("Заполните все поля");
      return;
    }
    create(newCard);
  };

  return (
    <div className="card">


      <div className="container-form-add-card">
        <div className="card-info">
          <p>name: {firstName}</p>
          <p>online status: {cardObj.status}</p>
          <p>username: {cardObj.last_name}</p>
          <p>email: {cardObj.email}</p>
          <p>home animal: {cardObj.home_animal}</p>
        </div>
        <div>
          <img className="card-avatar" src={cardObj.avatar} />
        </div>
      </div>

          

            {/* <p>name animal: {name_animal}</p> */}
            {/* <p>age: {age}</p> */}


            <form >
        {/* Имя */}
        <p>
          Представьтесь, как Вас зовут:{" "}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>

        {/* Имя собаки */}
        <p>
          Какая кличка Вашей собаки:{" "}
          <input
            value={nameAnimal}
            onChange={(e) => setNameAnimal(e.target.value)}
          />
        </p>
        <button onClick={addNewCard}>Добавить</button>
      </form>

    </div>
  );
};

export default AddCardForm;
