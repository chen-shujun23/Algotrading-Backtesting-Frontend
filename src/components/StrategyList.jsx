import React, { useContext, useEffect, useState } from "react";
import StrategyCard from "./StrategyCard";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";
import { GlobalContext } from "../App";
import UpdateModal from "./UpdateModal";

const StrategyList = (props) => {
  const {
    modalIsActive,
    changeModalStatus,
    disableScroll,
    accessToken,
    userPayload,
  } = useContext(GlobalContext);
  const [data, error, loading, fetchData] = useAxios();
  const [strategyData, setStrategyData] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const getStrategiesByUser = () => {
    const url = config.BASE_URL + `/users/${userPayload.id}/strategies`;
    const method = "GET";
    const body = null;
    const token = accessToken;
    fetchData(url, method, body, token);
  };

  useEffect(() => {
    getStrategiesByUser();
  }, []);

  useEffect(() => {
    if (data) {
      setStrategyData(data);
    }
  }, [data]);

  // set selected strategy when card update is clicked
  const handleUpdate = (strategy) => {
    setSelectedStrategy(strategy);
    changeModalStatus();
    disableScroll("root");
  };

  return (
    <div className="w-screen h-fit bg-yellow-light flex flex-row">
      {props.listTitle ? (
        <div className="w-1/4 flex flex-col left-0 pl-20 pr-10 py-10">
          <h3>{props.header}</h3>
          <span className="pt-4">{props.body}</span>
        </div>
      ) : null}
      <div className="flex flex-row py-10 pl-10 px-32 gap-10 overflow-x-auto">
        {strategyData.strategies &&
          strategyData.strategies.map((strategy) => {
            return (
              <StrategyCard
                key={strategy.id}
                strategy={strategy}
                onUpdate={() => handleUpdate(strategy)}
              />
            );
          })}
      </div>
      {modalIsActive && <UpdateModal selectedStrategy={selectedStrategy} />}
    </div>
  );
};

export default StrategyList;
