import React from 'react'

const ItemDogAge = (props) => {
  return (
    <option value={props.dog.age}>
      {props.dog.age}
    </option>
  )
}

export default ItemDogAge
