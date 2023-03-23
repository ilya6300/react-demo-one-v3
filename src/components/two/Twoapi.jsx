import React, { useState } from "react";
// import "./one.css";
import TwoApiList from "./TwoApiList";

const Twoapi = () => {
  const [cardArr, setCardArr] = useState([
    {
      id: "1",
      name: "Вася",
      username: "Vasya Nagibator",
      email: "vasya123456@mail.ru",
      avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "3",
      name: "Петя",
      username: "NePetya",
      email: "petya777@mail.ru",
            avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "2",
      name: "Генадий",
      username: "Crocodile",
      email: "Crocodile666@mail.ru",
            avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "4",
      name: "Макар",
      username: "Super Makar",
      email: "supermakaka@mail.ru",
            avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
  ]);

  return (
    <div className="one-container">
      <h2 className="title">Api One</h2>
      <TwoApiList cardArr={cardArr} />
      <p className="info-api">
        Прописанные "гвоздями" в коде
      </p>
    </div>
  );
};

export default Twoapi;
