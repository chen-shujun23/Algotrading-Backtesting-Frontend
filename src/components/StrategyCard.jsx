import React, { useState, useEffect, useContext } from "react";
import ButtonTransparent from "./ButtonTransparent";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAlpaca from "../hooks/useAlpaca";
import dayjs from "dayjs";

const StrategyCard = (props) => {
  const [strategy, setStrategy] = useState(props.strategy);
  const [apcaData, error, loading, fetchBars] = useAlpaca();
  const [analysisData, setAnalysisData] = useState([]);
  const [profitLoss, setProfitLoss] = useState(null);

  useEffect(() => {
    fetchBars(strategy.symbol, strategy.start_date, strategy.end_date);
  }, []);

  useEffect(() => {
    if (apcaData) {
      setAnalysisData(calculateSMA(apcaData));
    }
  }, [apcaData]);

  useEffect(() => {
    if (analysisData) {
      setProfitLoss(calculateProfit(analysisData));
    }
  }, [analysisData]);

  const calculateSMA = (bars) => {
    const smaData = [];
    const smaShortT = [];
    const smaLongT = [];

    for (let i = 0; i < bars.length; i++) {
      const date = dayjs(bars[i].Timestamp).format("YYYY-MM-DD");
      const vwap = bars[i].VWAP;

      // Calculate short term SMA
      if (i >= strategy.sSMA - 1) {
        const sumShortT = bars
          .slice(i - (strategy.sSMA - 1), i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avgShortT = sumShortT / strategy.sSMA;
        smaShortT.push(avgShortT);
      }

      // Calculate long term SMA
      if (i >= strategy.lSMA - 1) {
        const sumLongT = bars
          .slice(i - (strategy.lSMA - 1), i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avgLongT = sumLongT / strategy.lSMA;
        smaLongT.push(avgLongT);
      }
      smaData.push({
        date,
        vwap,
        sSMA: smaShortT[i - (strategy.sSMA - 1)] || null,
        lSMA: smaLongT[i - (strategy.lSMA - 1)] || null,
      });
    }
    return smaData;
  };

  const calculateProfit = (param) => {
    const capital = 10000;
    const qty_shares = 5;
    let currentShares = 0;
    let currentPrice = null;
    let buyDate = null;
    let buyPrice = null;
    let profit = 0;

    for (let i = 0; i < param.length; i++) {
      const point = param[i];
      if (point.lSMA && point.sSMA && point.sSMA > point.lSMA) {
        // Buy signal
        if (currentShares === 0) {
          currentShares = qty_shares;
          buyPrice = point.vwap;
          buyDate = point.date;
          currentPrice = buyPrice;
        }
      } else if (point.lSMA && point.sSMA && point.sSMA < point.lSMA) {
        // Sell signal
        if (currentShares > 0) {
          profit += (point.vwap - currentPrice) * currentShares;
          currentShares = 0;
          currentPrice = null;
        }
      }
    }

    if (currentShares > 0) {
      // Sell remaining qty_shares at the last point in the apcaData
      const lastPoint = param[param.length - 1];
      profit += (lastPoint.vwap - currentPrice) * currentShares;
    }

    const percentProfit = ((profit / capital) * 100).toFixed(2);

    return percentProfit;
  };

  return (
    <>
      <div className="w-1/3 aspect-[3/4] bg-white flex flex-col py-4">
        <div className="bg-blue w-1/4 text-white text-center">
          #{props.strategy.symbol}
        </div>
        <div className="font-bold p-4">{props.strategy.title}</div>
        <div className="h-3/5 w-full bg-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={730}
              height={250}
              data={analysisData}
              margin={{ top: 20, right: 20, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                style={{
                  fontSize: "12px",
                }}
              />
              <YAxis
                style={{
                  fontSize: "12px",
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sSMA"
                stroke="#E76F51"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="lSMA"
                stroke="#5F86D0"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="vwap"
                stroke="#422F01"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col p-4">
          <span>Return</span>
          {profitLoss > 0 ? (
            <span className="text-green">{`+${profitLoss}%`}</span>
          ) : (
            <span className="text-red">{`${profitLoss}%`}</span>
          )}
        </div>
        <div className="flex flex-row gap-2 px-4 mt-auto justify-between">
          <ButtonTransparent
            type="button"
            innerText="Update"
            onClick={props.onUpdate}
            className="w-1/2"
          />
          <ButtonTransparent
            type="button"
            innerText="Delete"
            className="w-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default StrategyCard;
