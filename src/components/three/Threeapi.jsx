import React, { useEffect, useState, useMemo } from "react";
// import "./one.css";
import ThreeApiList from "./ThreeApiList";
import ApiThree from './ApiThree'
const Threeapi = () => {
  const [cardArr, setCardArr] = useState([]);

  const [isOneApiLoading, setIsOneApiLoading] = useState (false);

  // Фильтр

const [search, setSearch] = useState("");
const [searchUN, setSearchUN] = useState("");

const searchCard = useMemo(() => {
  if (search) {
    return cardArr.filter((card) => 
    (card.first_name.toLowerCase().includes(search.toLowerCase()) 
    || card.last_name.toLowerCase().includes(search.toLowerCase())
    )
    );
  } 
  return cardArr
}, [cardArr, search])

  // 

async function fettchUsers () {
  setIsOneApiLoading(true);
  const cardArr = await ApiThree.getUserThree();
  setCardArr(cardArr);
  setIsOneApiLoading(false);
}

useEffect (() => {
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
        <ThreeApiList cardArr={searchCard} />
      )}
      <p className="info-api">Ссылка на json <a href='https://reqres.in/api/users?page=2'>https://reqres.in/api/users?page=2</a> из массива data[ ]</p>
    </div>
  );
};

export default Threeapi;

