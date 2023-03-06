import React from "react";
import PageHeader from "../components/PageHeader";
import StrategyList from "../components/StrategyList";
import illustration from "../assets/illustrationSearch.png";

const SearchResults = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        header="Search Results"
        copy="Click on a strategy to learn more, favourite to add to your favourites list, 
        and backtest to customise and add to your creations list."
        imgSrc={illustration}
        imgAlt="Graphic illustration of a man with a laptop."
      />
      <StrategyList />
    </div>
  );
};

export default SearchResults;
