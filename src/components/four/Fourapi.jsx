import React, { useEffect, useMemo, useState } from "react";
import CheckboxMenu from "./CheckboxMenu";
// import "./one.css";
import FourApiList from "./FourApiList";
// import ApiFour from './ApiFour'
// import localjson from "...";
import cl from "./BtnActive.module.css";
import ApiFour from "./ApiFour";
import ApiUpDate from "./ApiUpDate";
import ModalBlock from "../ModalBlock";
import axios from "axios";

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

  const [upDateA, setUpDateA] = useState(null)

  function handlerStatusOnline() {
    console.log(classOnline);
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
    console.log(classNotReg);
    if (offline) {
      setOffline(false);
      console.log("offline", offline);
      setClassOffline(cl.btnNoActive);
    } else {
      console.log(classOnline);
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

  const [search, setSearch] = useState("");
  let cards = cardArr;
  const statusCard = useMemo(() => {
    cards = cardArr;
    if (!online) {
      cards = [...cards].filter((card) => card.status !== "online");
    }

    if (!offline) {
      cards = [...cards].filter((card) => card.status !== "offline");
    }

    if (!notreg) {
      cards = [...cards].filter((card) => card.status !== "not registered");
    }

    return cards;
  }, [cardArr, online, offline, notreg, cards]);

  const searchAndStatusCard = useMemo(() => {
    if (search) {
      return statusCard.filter(
        (card) =>
          card.first_name.toLowerCase().includes(search.toLowerCase()) ||
          card.last_name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return statusCard;
  }, [cardArr, search, statusCard]);

  //

  async function fettchUsers() {
    setIsOneApiLoading(true);
    const cardArr = await ApiFour.getUserFour();
    setCardArr(cardArr);
    setIsOneApiLoading(false);
  }

  useEffect(() => {
    fettchUsers();
  }, [upDateA]);

  const [visibleBlock, setVisibleBlock] = useState(false);
  const [targetCard, setTargetCard] = useState(null);
  const [checkBtn, setCheckBtn] = useState("");

  const targetCardFucntion = (card) => {
    // setTargetCard(cardArr.find((t) => t.id === card.id));
    setTargetCard(card.id);
    setVisibleBlock(true);
  };

  // Обновление массива

  const upDateAgeDog = () => {
    setCardArr(
      cardArr.map((upCard) => {
        console.log(upCard.id, targetCard);
        if (upCard.id === targetCard) {
          if (upCard.age === "puppy") {
            return { ...upCard, age: "junior" };
          } else if (upCard.age === "junior") {
            return { ...upCard, age: "adult" };
          } else {
            return upCard;
          }
        } else {
          return upCard;
        }
      })
    );
    updateAnimal();
  };

  // Запись в api





  function updateAnimal() {
    // cardArr = await ApiUpDate.getApiUpDate();
    // setCardArr(await ApiUpDate.getApiUpDate());
    axios.put("http://localhost:3000/data", cardArr)
    .then(response => setUpDateA(response.data.upDateA))
  }
  
  // 

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
        <FourApiList
          cardArr={searchAndStatusCard}
          targetcard={targetCardFucntion}
        />
      )}
      <ModalBlock visible={visibleBlock}>
        <button onClick={() => setVisibleBlock(false)}>Отмена</button>
        <p>
          Просмотреть id элемента по таргету
          <button onClick={() => console.log(targetCard)}>Получить</button>
        </p>
        <p>
          Увеличить возрост собаке
          <button onClick={upDateAgeDog}>Увеличить</button>
        </p>
        <p>
          Прочитать массив
          <button onClick={() => console.log(cardArr)}>cardArr</button>
        </p>
        <p>
          Получить bd.json
          <button onClick={() => fettchUsers()}>Получить</button>
        </p>
      </ModalBlock>
      <p className="info-api">Список из локального файла JSON</p>
    </div>
  );
};

export default Fourapi;
