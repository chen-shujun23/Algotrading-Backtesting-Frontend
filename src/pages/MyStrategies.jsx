import React from "react";
import PageHeader from "../components/PageHeader";
import StrategyList from "../components/StrategyList";
import illustration from "../assets/illustrationStrategies.png";

const MyStrategies = () => {
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
