import React from "react";
import ItemDogAge from "./ItemDogAge";

const DogAgeList = ({ ageDogArrCollection, onChange, value }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option>
        Выберите возраст
      </option>
      {ageDogArrCollection.map((dog) => (
        <ItemDogAge dog={dog} key={dog.id} />
      ))}
    </select>
  );
};

export default DogAgeList;
