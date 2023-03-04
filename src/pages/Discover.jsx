import React from "react";
import PageHeader from "../components/PageHeader";
import illustration from "../assets/illustrationDiscover.png";

const Discover = () => {
  return (
    <div>
      <PageHeader
        header="Discover"
        copy="Explore our curated investment strategies.
        Click on a strategy to learn more, favourite to add to your favourites list, 
        and backtest to customise and add to your creations list."
        imgSrc={illustration}
        imgAlt="Graphic illustration of a man with a laptop."
      />
    </div>
  );
};

export default Discover;
