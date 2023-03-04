import React from "react";

const PageHeader = (props) => {
  return (
    <div className="w-screen h-80 bg-yellow-dark flex flex-row px-20 py-10">
      <div className="grid w-1/2 pr-10 content-center">
        <h1>{props.header}</h1>
        <span className="pt-5">{props.copy}</span>
      </div>
      <div className="flex w-1/2 pl-10 justify-center">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageHeader;
