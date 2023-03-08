import React, { useState, useEffect } from "react";
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

const Chart = (props) => {
  const [data, setData] = useState(props.strategy);
  const [apcaData, error, loading, fetchBars] = useAlpaca();
  const [analysisData, setAnalysisData] = useState([]);
  const [profitLoss, setProfitLoss] = useState(null);

  useEffect(() => {
    fetchBars(data.symbol, data.start_date, data.end_date);
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

  useEffect(() => {
    if (profitLoss) {
      props.onAnalysis(profitLoss);
    }
  }, [profitLoss]);

  const calculateSMA = (bars) => {
    const smaData = [];
    const smaShortT = [];
    const smaLongT = [];

    for (let i = 0; i < bars.length; i++) {
      const date = dayjs(bars[i].Timestamp).format("YYYY-MM-DD");
      const vwap = bars[i].VWAP;

      // Calculate short term SMA
      if (i >= data.sSMA - 1) {
        const sumShortT = bars
          .slice(i - (data.sSMA - 1), i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avgShortT = sumShortT / data.sSMA;
        smaShortT.push(avgShortT);
      }

      // Calculate long term SMA
      if (i >= data.lSMA - 1) {
        const sumLongT = bars
          .slice(i - (data.lSMA - 1), i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avgLongT = sumLongT / data.lSMA;
        smaLongT.push(avgLongT);
      }
      smaData.push({
        date,
        vwap,
        sSMA: smaShortT[i - (data.sSMA - 1)] || null,
        lSMA: smaLongT[i - (data.lSMA - 1)] || null,
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
        <Line type="monotone" dataKey="sSMA" stroke="#E76F51" dot={false} />
        <Line type="monotone" dataKey="lSMA" stroke="#5F86D0" dot={false} />
        <Line type="monotone" dataKey="vwap" stroke="#422F01" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
