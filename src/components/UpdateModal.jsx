import React, { useContext, useState, useEffect } from "react";
import FormMomentum from "./FormMomentum";
import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { GlobalContext } from "../App";

const UpdateModal = (props) => {
  const { changeModalStatus, enableScroll } = useContext(GlobalContext);
  const [dataToUpdate, setDataToUpdate] = useState({});

  useEffect(() => {
    if (props.selectedStrategy) {
      setDataToUpdate(props.selectedStrategy);
    }
  }, [props.selectedStrategy]);

  const handleModalClose = () => {
    changeModalStatus();
    enableScroll("root");
  };

  return ReactDOM.createPortal(
    <div>
      <div className="fixed top-0 right-0 w-screen h-screen z-40 bg-slate-800 opacity-50" />
      <div className=" z-50 absolute bg-yellow-dark w-1/2 h-screen top-0 right-0 text-primary-800 p-8 overflow-y-auto">
        <div className="flex flex-row justify-between">
          <h2>Update Strategy</h2>
          <div onClick={handleModalClose} style={{ cursor: "pointer" }}>
            <RxCross1 className="text-3xl" />
          </div>
        </div>
        <FormMomentum dataToUpdate={dataToUpdate} />
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default UpdateModal;
