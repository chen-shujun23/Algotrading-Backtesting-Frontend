import React from "react";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`w-fit px-4 text-white rounded-full hover:scale-105 ease-in-out duration-300 font-openSans 
      ${props.height} ${props.bgColour} ${props.fontSize}`}
    >
      {props.innerText}
    </button>
  );
};
export default Button;
