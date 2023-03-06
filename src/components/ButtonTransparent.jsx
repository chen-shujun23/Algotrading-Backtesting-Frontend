import React from "react";
import { Link } from "react-router-dom";

const ButtonTransparent = (props) => {
  return (
    <Link
      to={`${props.link}`}
      onClick={props.handleClick}
      className={props.className}
    >
      <button
        type="button"
        className="w-full h-fit p-2 text-brown rounded-full font-openSans bg-transparent border border-brown
        hover:font-bold hover:border-2"
      >
        {props.innerText}
      </button>
    </Link>
  );
};
export default ButtonTransparent;
