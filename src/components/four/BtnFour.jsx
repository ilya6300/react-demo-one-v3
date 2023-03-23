import React from "react";


const BtnFour = ({ children, ...props }) => {

  return (
    <div>
    <button className={props.className} {...props}>
      {children}
    </button><span className="textBtn">{props.text_btn}</span>
    </div>

  );
};

export default BtnFour;
