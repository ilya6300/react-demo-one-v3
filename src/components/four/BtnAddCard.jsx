import React from 'react'

const BtnAddCard = ({children, ...props }) => {
  return (
    <button className='btn-add-card' {...props}>{children}</button>
  )
}

export default BtnAddCard