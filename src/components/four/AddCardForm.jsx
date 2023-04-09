import React, { useEffect, useState } from "react";
import cl from "./ShowSubMenu.module.css";
import DogAgeList from "./DogAgeList";
import axios from "axios";

const AddCardForm = ({ cardArr, create, cancel }) => {
  const [idCard, setIdCard] = useState(cardArr.length + 1);
  const [firstName, setFirstName] = useState("");
  const [nameAnimal, setNameAnimal] = useState("");
  const [ageDog, setAgeDog] = useState("");
  const [cardObj, setCardObj] = useState({
    first_name: firstName,
    status: "online",
    last_name: "YouSuperMan",
    email: "New_User@mail.ru",
    home_animal: "Dog",
    name_animal: nameAnimal,
    age: ageDog,
    // id: idCard,
    avatar:
      "https://krasivosti.pro/uploads/posts/2021-07/1625765835_19-krasivosti-pro-p-khaski-sobaka-s-raznimi-glazami-sobaki-kra-21.png",
  });

  // Получение api
  const [ageDogArrCollection, setAgeDogArrCollection] = useState([]);
  const dogURL = "http://localhost:3000/dog";

  async function getAgeDog() {
    try {
      const resDog = await axios.get(dogURL);
      setAgeDogArrCollection(resDog.data);
      return resDog.data;
    } catch (e) {
      console.log(e);
    }
  }

  // Запись в api

  function addNewCardApi() {
    axios
      .post("http://localhost:3000/data", {
        id: idCard,
        first_name: firstName,
        status: "online",
        last_name: "YouSuperMan",
        email: "New_User@mail.ru",
        home_animal: "Dog",
        name_animal: nameAnimal,
        age: ageDog,
        avatar:
          "https://krasivosti.pro/uploads/posts/2021-07/1625765835_19-krasivosti-pro-p-khaski-sobaka-s-raznimi-glazami-sobaki-kra-21.png",
      })
      .then((response) => response.data)
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getAgeDog();
  }, []);

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
      age: ageDog,
      // avatar:
      //   "https://krasivosti.pro/uploads/posts/2021-07/1625765835_19-krasivosti-pro-p-khaski-sobaka-s-raznimi-glazami-sobaki-kra-21.png",
    };
    if (
      firstName === "" ||
      nameAnimal === "" ||
      ageDog === "" ||
      ageDog === "Выберите возраст"
    ) {
      console.log("Заполните все поля");
      return;
    }
    create(newCard);
    addNewCardApi();
  };

  const canelNewCard = () => {
    setFirstName("");
    setNameAnimal("");
    setAgeDog("");
    cancel()
  };

  const selectAge = (sort) => {
    setAgeDog(sort);
    console.log(ageDog);
  };

  return (
    <div className="container-form-add-card">
      <div className="container-text-add-card">
        <div className="card-info">
          <p>name: {firstName}</p>
          <p>online status: {cardObj.status}</p>
          <p>username: {cardObj.last_name}</p>
          <p>email: {cardObj.email}</p>
          <p>home animal: {nameAnimal}</p>
        </div>
        <div>
          <img className="card-avatar" src={cardObj.avatar} />
          <DogAgeList
            ageDogArrCollection={ageDogArrCollection}
            onChange={selectAge}
          />
        </div>
      </div>

      {/* <p>name animal: {name_animal}</p> */}
      {/* <p>age: {age}</p> */}

      <form>
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
        <button onClick={canelNewCard}>Отмена</button>
      </form>
    </div>
  );
};

export default AddCardForm;
