import React, { useState } from "react";
import ButtonTransparent from "./ButtonTransparent";
import Chart from "./Chart";

const StrategyCard = () => {
  const [profitLossNum, setProfitLossNum] = useState(null);

  const handleAnalysis = (data) => {
    setProfitLossNum(data);
  };

  return (
    <div className="w-full aspect-[3/4] bg-white flex flex-col py-4">
      <div className="bg-blue w-1/4 text-center">#AAPL</div>
      <div className="font-bold p-4">AAPL SMA Crossover</div>
      <div className="h-3/5 w-full bg-slate-200">
        <Chart onAnalysis={handleAnalysis} />
      </div>
      <div className="flex flex-col p-4">
        <span>Return</span>
        {profitLossNum > 0 ? (
          <span className="text-green">{`+${profitLossNum}%`}</span>
        ) : (
          <span className="text-red">{`${profitLossNum}%`}</span>
        )}
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
