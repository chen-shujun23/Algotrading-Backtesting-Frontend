import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import StrategyList from "../components/StrategyList";
import illustration from "../assets/illustrationStrategies.png";
import useAxios from "../hooks/useAxios";
import { GlobalContext } from "../App";

const MyStrategies = () => {
  const { accessToken, userPayload } = useContext(GlobalContext);

  useEffect(() => {
    if (accessToken) {
      const url = config.BASE_URL + `/users/${userPayload.id}/strategies`;
      const method = "GET";
      const body = JSON.stringify(login);
      console.log(body);
      fetchData(url, method, body);
    }
  }, []);

  return (
    <div>
      <PageHeader
        header="My Strategies"
        copy="Click on a strategy to learn more, favourite to add to your favourites list, 
        and backtest to customise and add to your creations list."
        imgSrc={illustration}
        imgAlt="Graphic illustration of a man with a laptop."
      />
      <StrategyList
        listTitle
        header="My Creations"
        body="Your original concepts."
      />
      <StrategyList
        listTitle
        header="My Favourites"
        body="Favourite strategies discovered by you. Update to make it your own and add to your creations list."
      />
    </div>
  );
};

export default MyStrategies;
