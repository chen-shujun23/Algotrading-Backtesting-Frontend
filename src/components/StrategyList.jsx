import React from "react";

const StrategyList = (props) => {
  return (
    <div className="w-screen h-96 bg-yellow-light flex flex-row">
      {props.listTitle ? (
        <div className="w-1/4 flex flex-col left-0 pl-20 pr-10 py-10">
          <h3>{props.header}</h3>
          <span className="pt-4">{props.body}</span>
        </div>
      ) : null}
    </div>
  );
};

export default StrategyList;
