import React, { useState } from "react";
import cl from "./BtnActive.module.css";
import BtnFour from "./BtnFour";

// // Стилизация
// const visibleClasses = [cl.btnNoActive];
// const [classOnline, setClassOnline] = useState(visibleClasses);

// //

const CheckboxMenu = (props) => {
  // const visibleClasses = [cl.btnNoActive, cl.btnActive];
  // const [visible, setVisible] = useState(true);

  // setClOnline(false);
  // return visibleClasses.pop(cl.btnActive);
  // setClOnline(false);

  return (
    <div
      style={{
        textAlign: "start",
        margin: "0 0 15px 30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Фильтр по статусам:</p>
      <BtnFour
        text_btn="Онлайн"
        className={props.cls_btn_online}
        // className={visibleClasses.join(" ")}
        onClick={props.handlerStatusOnline}
        // hendlerstatusonline={props.online}
        // onChange={onChange}
      >
        On
      </BtnFour>
      <BtnFour
        text_btn="Оффлайн"
        className={props.cls_btn_offline}
        // visibleFunc={props.visibleFunc}
        // className={visibleClasses.join(' ')}
        onClick={props.handlerStatusOffline}
      >
        Off
      </BtnFour>
      <BtnFour
        text_btn="Без регистрации"
        className={props.cls_btn_notreg}
        // className={visibleClasses.join(' ')}
        onClick={props.handlerStatusNotReg}
        // onChange={props.onChange}
      >
        NR
      </BtnFour>
    </div>
  );
};

export default CheckboxMenu;
