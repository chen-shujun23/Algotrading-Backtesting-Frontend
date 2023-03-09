import React from "react";

const ButtonTransparent = (props) => {
  return (
    <button
      type="button"
      className="w-full h-fit p-2 text-brown rounded-full font-openSans bg-transparent border border-brown
        hover:font-bold hover:border-2"
      onClick={props.onClick}
    >
      {props.innerText}
    </button>
  );
};
export default ButtonTransparent;
