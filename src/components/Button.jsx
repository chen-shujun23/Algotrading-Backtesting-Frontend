import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <Link
      to={`${props.link}`}
      onClick={props.handleClick}
      className={props.className}
    >
      <button
        type={props.type}
        className={`w-fit h-12 px-4 text-white rounded-full hover:scale-105 ease-in-out duration-300 font-openSans 
      ${props.bgColour}`}
      >
        {props.innerText}
      </button>
    </Link>
  );
};
export default Button;
