import React, { useEffect, useMemo, useState } from "react";
import CheckboxMenu from "./CheckboxMenu";
// import "./one.css";
import FourApiList from "./FourApiList";
// import ApiFour from './ApiFour'
import localjson from "./localJSON.json";
import cl from "./BtnActive.module.css";

const Fourapi = () => {
  const [cardArr, setCardArr] = useState([]);
  const [isOneApiLoading, setIsOneApiLoading] = useState(false);

  //
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(true);
  const [notreg, setNotreg] = useState(true);

  // Стилизация
  // const visibleClassesActive = [cl.btnActive];
  // const visibleClasses = [cl.btnNoActive];
  const [classOnline, setClassOnline] = useState(cl.btnActive);
  const [classOffline, setClassOffline] = useState(cl.btnActive);
  const [classNotReg, setClassNotReg] = useState(cl.btnActive);

  //

  function handlerStatusOnline() {
    console.log(classOnline)
    if (online) {
      setOnline(false);
      setClassOnline(cl.btnNoActive);
      console.log("online", online);
    } else {
      setOnline(true);
      console.log("online", online);
      setClassOnline(cl.btnActive);
    }
  }
  function handlerStatusOffline() {
        console.log(classNotReg)
    if (offline) {
      setOffline(false);
      console.log("offline", offline);
      setClassOffline(cl.btnNoActive);
    } else {
      console.log(classOnline)
      setOffline(true);
      console.log("offline", offline);
      setClassOffline(cl.btnActive);
    }
  }

  function handlerStatusNotReg() {
    if (notreg) {
      setNotreg(false);
      console.log("notreg", notreg);
      setClassNotReg(cl.btnNoActive);
    } else {
      setNotreg(true);
      console.log("notreg", notreg);
      setClassNotReg(cl.btnActive);
    }
  }

  //

  // Фильтр

  // const cardsArr = useMemo(() => {
  //   setCards(cardArr)
  // }, [cardArr, cards, online, offline, notreg])

  const [search, setSearch] = useState("");
  // const [cards, setCards] = useState([]);
  let cards = cardArr;
  const statusCard = useMemo(() => {
    // setCards(cardArr)
    // console.log(cards)
    cards = cardArr;
    // console.log(cards)
    if (!online) {
      cards = [...cards].filter((card) => card.status !== "online");
    }

    if (!offline) {
      cards = [...cards].filter((card) => card.status !== "offline");
    }

    if (!notreg) {
      cards = [...cards].filter((card) => card.status !== "not registered");
    }

    // if (!online) {
    // return [...cardArr].filter((card) => card.status !== "online");
    // }

    // if (!offline) {
    //  return [...cardArr].filter((card) => card.status !== "offline");
    // }

    // if (!notreg) {
    // return [...cardArr].filter((card) => card.status !== "not registered");
    // }

    return cards;
  }, [cardArr, online, offline, notreg, cards]);

  const searchAndStatusCard = useMemo(() => {
    if (search) {
      return statusCard.filter(
        (card) =>
          // (online === true && card.status.includes("online")) &&
          // offline === true &&
          // notreg === true &&
          // card.status.includes(online) ||
          card.first_name.toLowerCase().includes(search.toLowerCase()) ||
          card.last_name.toLowerCase().includes(search.toLowerCase())
      );
    }
    // return cardArr;
    return statusCard;
  }, [cardArr, search, statusCard]);

  //

  function fettchUsers() {
    setIsOneApiLoading(true);
    const cardArr = localjson["data"];
    setCardArr(cardArr);
    setIsOneApiLoading(false);
  }

  useEffect(() => {
    fettchUsers();
  }, []);

  return (
    <div className="one-container">
      <h2 className="title">Api список из файла json</h2>
      <input
        className="search-container"
        placeholder="Поиск по имени и юзернейму"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <CheckboxMenu
          cls_btn_online={classOnline}
          cls_btn_offline={classOffline}
          cls_btn_notreg={classNotReg}
          handlerStatusOnline={handlerStatusOnline}
          handlerStatusOffline={handlerStatusOffline}
          handlerStatusNotReg={handlerStatusNotReg}
        />
      </div>
      {isOneApiLoading ? (
        <h2>"Идёт загрузка, пожалуйста, ждите..."</h2>
      ) : (
        <FourApiList cardArr={searchAndStatusCard} />
      )}
      <p className="info-api">Список из локального файла JSON</p>
    </div>
  );
};

export default Fourapi;