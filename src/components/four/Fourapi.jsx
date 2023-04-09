import React, { useEffect, useMemo, useState } from "react";
import CheckboxMenu from "./CheckboxMenu";
import FourApiList from "./FourApiList";
import cl from "./BtnActive.module.css";
import ApiFour from "./ApiFour";
import ModalBlock from "../ModalBlock";
import axios from "axios";
import BtnAddCard from "./BtnAddCard";
import AddCardForm from "./AddCardForm";

const Fourapi = () => {
  const [cardArr, setCardArr] = useState([]);
  const [isOneApiLoading, setIsOneApiLoading] = useState(false);

  //
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(true);
  const [notreg, setNotreg] = useState(true);

  // Стилизация

  const [classOnline, setClassOnline] = useState(cl.btnActive);
  const [classOffline, setClassOffline] = useState(cl.btnActive);
  const [classNotReg, setClassNotReg] = useState(cl.btnActive);

  const [classCard, setClassCard] = useState([]);

  //
  const [newStatus, setNewStatus] = useState(false);

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

  const [list, setList] = useState(true);

  const colorCard = useMemo(() => {
    cardArr.map((card) => {
      if (list) {
        console.log('list', list)
        if (card.age === "puppy") {
          card.className = "card-puppy";
        } else if (card.age === "junior") {
          card.className = "card-junior";
        } else if (card.age === "adult") {
          card.className = "card-adult";
        } else if (!list){
          console.log('list', list)
          if (card.age === "puppy") {
            card.className = "card-puppy-tiles";
          } else if (card.age === "junior") {
            card.className = "card-junior-tiles";
          } else if (card.age === "adult") {
            card.className = "card-adult-tiles";
          }
        }
      }
    });
  }, [cardArr, list]);

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

  const userURL = "http://localhost:3000/data";

  async function fettchUsers() {
    setIsOneApiLoading(true);
    const cardArr = await ApiFour.getUserFour();
    setCardArr(cardArr);
    setIsOneApiLoading(false);
  }

  useEffect(() => {
    // console.log(newStatus)
    if (newStatus) {
      console.log("updateAnimal");
      updateAnimal();
      fettchUsers();

      setNewStatus(false);
    } else {
      fettchUsers();
    }
  }, [newStatus, userURL]);

  const [visibleBlock, setVisibleBlock] = useState(false);
  const [targetCard, setTargetCard] = useState(null);
  const [targetCardFull, setTargetCardFull] = useState(null);
  const [checkBtn, setCheckBtn] = useState("");

  const targetCardFucntion = (card) => {
    setTargetCardFull(cardArr.find((t) => t.id === card.id));
    setTargetCard(card.id);
    // setTargetCardFull(card)
    console.log(targetCardFull);
    setVisibleBlock(true);
  };

  // Обновление массива

  const upDateAgeDog = () => {
    setCardArr(
      cardArr.map((upCard) => {
        // console.log(upCard.id, targetCard);
        if (upCard.id === targetCard) {
          if (upCard.age === "puppy") {
            setNewStatus("junior");
            console.log(newStatus);
            return { ...upCard, age: newStatus };
          } else if (upCard.age === "junior") {
            setNewStatus("adult");
            console.log(newStatus);
            return { ...upCard, age: newStatus };
          } else {
            return upCard;
          }
        } else {
          return upCard;
        }
      })
    );
    setVisibleBlock(false);
  };

  // Запись в api

  function updateAnimal() {
    axios
      .patch("http://localhost:3000/data/" + targetCard, {
        age: newStatus,
      })
      .then((response) => response.data)
      .catch((e) => console.log(e));
  }

  // Создание новой карты

  const [visibleNewCard, setVisibleNewCard] = useState(false);
  const createCard = (newCard) => {
    setCardArr([...cardArr, newCard]);
    setVisibleNewCard(false);
    console.log(cardArr);
  };

  const cancelNewCard = () => {
    setVisibleNewCard(false);
  };

  // Переключение интерфейса

  const setListFalse =  () => {
    setList(false)
    console.log(list)
  }

  return (
    <div className="one-container">
      <h2 className="title">Api список из файла json</h2>
      <div className="container-interface">
        <input
          className="search-container"
          placeholder="Поиск по имени и юзернейму"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <img
            className="interfece-pane-btn"
            src="https://cdn-icons-png.flaticon.com/512/483/483334.png"
            onClick={() => setList(true)}
          />
          <img
            className="interfece-pane-btn"
            src="https://cdn-icons-png.flaticon.com/512/1218/1218403.png"
            onClick={setListFalse}
          />
        </div>
      </div>
      <div className="container-control-list">
        <CheckboxMenu
          cls_btn_online={classOnline}
          cls_btn_offline={classOffline}
          cls_btn_notreg={classNotReg}
          handlerStatusOnline={handlerStatusOnline}
          handlerStatusOffline={handlerStatusOffline}
          handlerStatusNotReg={handlerStatusNotReg}
        />
        <div>
          <BtnAddCard
            onClick={() =>
              !visibleNewCard
                ? setVisibleNewCard(true)
                : setVisibleNewCard(false)
            }
          >
            Добавить пользователя
          </BtnAddCard>
          <button onClick={() => console.log(cardArr)}>
            Получить массив cardArr
          </button>
        </div>
      </div>
      {visibleNewCard ? (
        <AddCardForm
          cancel={cancelNewCard}
          cardArr={cardArr}
          create={createCard}
        />
      ) : (
        <span></span>
      )}
      {isOneApiLoading ? (
        <h2>"Идёт загрузка, пожалуйста, ждите..."</h2>
      ) : (
        <FourApiList
          list={list}
          cardArr={searchAndStatusCard}
          targetcard={targetCardFucntion}
        />
      )}
      {visibleBlock ? (
        <ModalBlock visible={visibleBlock}>
          <h3>Карточка пользователя</h3>
          <ul className="modal-card-style">
            <li>id карточки - {targetCard}</li>
            <li>Имя: {targetCardFull.first_name}</li>
            <li>Домашнее животное {targetCardFull.home_animal}</li>
            <li>
              Кличка {targetCardFull.home_animal} - {targetCardFull.name_animal}
            </li>
            <li>
              возраст {targetCardFull.name_animal} - {targetCardFull.age}
            </li>
            {targetCardFull.age !== "adult" ? (
              <li>
                Увеличить возрост {targetCardFull.name_animal}{" "}
                <button onClick={upDateAgeDog}>Увеличить возраст</button>
              </li>
            ) : (
              <li>
                {targetCardFull.name_animal} уже взрослый, возраст увеличить
                нельзя
              </li>
            )}
            <li>
              <button onClick={() => setVisibleBlock(false)}>Отмена</button>
            </li>
          </ul>
        </ModalBlock>
      ) : (
        <p></p>
      )}
      <p className="info-api">Здесь могла быть ваша реклама</p>
    </div>
  );
};

export default Fourapi;
