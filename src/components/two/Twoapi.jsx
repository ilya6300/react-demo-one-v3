import React, { useMemo, useState } from "react";
import ModalBlock from "../ModalBlock";
// import "./one.css";
import TwoApiList from "./TwoApiList";

const Twoapi = () => {
  const [cardArr, setCardArr] = useState([
    {
      id: "1",
      name: "Вася",
      username: "Vasya Nagibator",
      email: "vasya123456@mail.ru",
      home_animal: "Dog",
      name_animal: "Cezar'",
      age: "puppy",
      avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "3",
      name: "Петя",
      username: "NePetya",
      email: "petya777@mail.ru",
      home_animal: "Dog",
      name_animal: "Markiza",
      age: "junior",
      avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "2",
      name: "Генадий",
      username: "Crocodile",
      email: "Crocodile666@mail.ru",
      home_animal: "Dog",
      name_animal: "Baks",
      age: "old",
      avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
    {
      id: "4",
      name: "Макар",
      username: "Super Makar",
      email: "supermakaka@mail.ru",
      home_animal: "Dog",
      name_animal: "Zues",
      age: "junior",
      avatar: "https://cdn-icons-png.flaticon.com/512/6998/6998058.png",
    },
  ]);

  // const [inputNameAnimal, setInputNameAnimal] = useState("");
  //   const hendlerInputNameAnimal = (e) => {
  //     setInputNameAnimal(e.target.value);
  //   };
  const [tempArr, setTempArr] = useState(cardArr);
  //   let cardUpdateNameAnimal;

  // const upDateAgeAnimal = useMemo  (() => {
  // const targetCardF = (card) => {
  //   let targetCard = cardArr.find((t) => t.id === card.id)
  //   // let targetCard =
  // }
  // if (cardArr.find((t, card) => t.id === card.id))
  // {

  // }
  // }, [cardArr])

  // const writeNameAnimal = () => {
  //   setTempArr({
  //     ...cardArr,
  //     [tempArr.name_animal]: "inputNameAnimal",
  //   });
  // }

  // const hendlerBtnNameAnimal = (card) => {

  //   setTempArr(cardArr.find((t) => t.id === card.id))
  //  writeNameAnimal()

  //   // setTempArr({
  //   //   ...tempArr,
  //   //   [cardUpdateNameAnimal.name_animal]: "inputNameAnimal",
  //   // });

  //   console.log(tempArr);
  // };

  const [visibleBlock, setVisibleBlock] = useState(false);
  const [targetCard, setTargetCard] = useState("");

  const targetCardFucntion = (card) => {
    setTargetCard(cardArr.find((t) => t.id === card.id));
    setVisibleBlock(true);
  };

  // const upDateAgeDog = useMemo = (() => {

  // }, [])

  const upDateAgeDog = () => {
    // setCardArr({...cardArr, [targetCard.age]: "new"})
    console.log(targetCard.age);
    console.log(cardArr);
    setCardArr({ ...cardArr, [targetCard.age]: "new" });
    return cardArr
  };

  return (
    <div className="one-container">
      <h2 className="title">Api One</h2>
      <TwoApiList
        cardArr={cardArr}
        // onChange={hendlerInputNameAnimal}
        targetcard={targetCardFucntion}
      />
      <ModalBlock
        visible={visibleBlock}
        // setVisibleBlock={setVisibleBlock}
      >
        <button onClick={() => setVisibleBlock(false)}>Отмена</button>
        <button onClick={() => console.log(targetCard)}>targetCard</button>
        <button onClick={upDateAgeDog}>Up age</button>
      </ModalBlock>
      {/* <button onClick={hendlerBtnNameAnimal}>rkbr rkfr</button> */}
      <p className="info-api">Прописанные "гвоздями" в коде</p>
    </div>
  );
};

export default Twoapi;
