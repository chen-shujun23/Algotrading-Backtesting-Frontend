import React from "react";

const ButtonSubmit = (props) => {
  return (
    <button
      type="submit"
      onClick={props.handleClick}
      className={`w-fit h-12 px-4 text-white rounded-full hover:scale-105 ease-in-out duration-300 font-openSans 
      ${props.bgColour}`}
    >
      {props.innerText}
    </button>
  );
};
export default ButtonSubmit;
