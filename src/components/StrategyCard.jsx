import React from "react";
import ButtonTransparent from "./ButtonTransparent";
import Chart from "./Chart";

const StrategyCard = () => {
  return (
    <div className="w-full aspect-[3/4] bg-white flex flex-col py-4">
      <div className="bg-blue w-1/4 text-center">#AAPL</div>
      <div className="font-bold p-4">AAPL SMA Crossover</div>
      <div className="h-3/5 w-full bg-slate-200">
        <Chart />
      </div>
      <div className="flex flex-col p-4">
        <span>Return</span>
        <span className="text-green">+50.45%</span>
      </div>
      <div className="flex flex-row gap-2 px-4 mt-auto justify-between">
        <ButtonTransparent
          type="button"
          innerText="Backtest"
          link="/create"
          className="w-1/2"
        />
        <ButtonTransparent
          type="button"
          innerText="Favourite"
          link="/my-strategies"
          className="w-1/2"
        />
      </div>

      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: Data not found</p>} */}
    </div>
  );
};

export default StrategyCard;
