import React, { useState } from "react";
// import "../App.css"
import cl from '../components/ModalBlock.module.css'

const ModalBlock = ({ children, visible, setVisibleBlock }) => {
//   const [visibleBlock, setVisibleBlock] = useState("showModal");
// const [visibleClassBlock, setVisibleClassBlock] = useState (cl.hiddenModal)

let visibleClassBlock = (cl.hiddenModal)
  if(visible) {
    visibleClassBlock = (cl.showModal)
  } 
//   else {
//     setVisibleClassBlock(cl.hiddenModal)
//   }

  return (
    <div className={visibleClassBlock}>
      <div className="modalBlockContent">{children}</div>
    </div>
  );
};

export default ModalBlock;
