import React, { useState, useEffect, useRef } from "react";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [clickedId, setClickedId] = useState(1);
  const ref = useRef(null);
  const { onClickOutside } = props;

  const handleClickAccordion = (e) => {
    setIsActive(!isActive);
    setClickedId(e.target.id);
  };

  useEffect(() => {
    props.onSave(clickedId);
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div
      className="w-full flex flex-col border-b-2 border-yellow-dark"
      id={props.id}
      onClick={handleClickAccordion}
      style={{ cursor: "pointer" }}
    >
      <div ref={ref} className="flex mt-10 pointer-events-none justify-between">
        <h2>{props.header}</h2>
        <h2>{isActive ? "-" : "+"}</h2>
      </div>

      {isActive && <div className={"pt-4 w-full"}>{props.body}</div>}
    </div>
  );
};

export default Accordion;
