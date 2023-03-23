import React, { useEffect, useMemo, useState } from "react";
// import "./one.css";
import ApiOne from "./ApiOne";
import OneApiList from "./OneApiList";

const Oneapi = () => {
  const [cardArr, setCardArr] = useState([]);

  const [isOneApiLoading, setIsOneApiLoading] = useState(false);

  // Фильтр

  const [search, setSearch] = useState("");

  const searchCard = useMemo(() => {
    if (search) {
      return cardArr.filter((card) =>
      (card.name.toLowerCase().includes(search.toLowerCase()) 
      || card.username.toLowerCase().includes(search.toLowerCase())
      )
      );
    }
    return cardArr;
  }, [cardArr, search]);

  //

  async function fettchUsers() {
    setIsOneApiLoading(true);
    const cardArr = await ApiOne.getUser();
    setCardArr(cardArr);
    setIsOneApiLoading(false);
  }

  useEffect(() => {
    fettchUsers();
  }, []);

  return (
    <div className="one-container">
      <h2 className="title">Api список из файла json</h2>
      <input className="search-container"
      placeholder="Поиск по имени и юзернейму"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isOneApiLoading ? (
        <h2>"Идёт загрузка, пожалуйста, ждите..."</h2>
      ) : (
        <OneApiList cardArr={searchCard} />
      )}
      <p className="info-api">
        Ссылка на json:{" "}
        <a href="https://jsonplaceholder.typicode.com/users">
          https://jsonplaceholder.typicode.com/users
        </a>
      </p>
    </div>
  );
};

export default Oneapi;
