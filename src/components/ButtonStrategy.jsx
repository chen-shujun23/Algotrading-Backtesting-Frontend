import React from "react";

const ButtonStrategy = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="p-4 hover:font-bold focus:font-bold border-b-2 border-yellow-light"
    >
      {props.strategy}
    </button>
  );
};

export default ButtonStrategy;
