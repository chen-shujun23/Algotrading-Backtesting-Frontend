import React, { useState, useEffect } from "react";
import useAlpaca from "../hooks/useAlpaca";
import dayjs from "dayjs";

const MomentumAlgo = () => {
  //   const [bars, setBars] = useState([]);
  const [data, error, loading, fetchBars] = useAlpaca();
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    fetchBars("VOO", "2021-02-01", "2022-02-01");
  }, []);

  useEffect(() => {
    if (data) {
      setBars(data);
      console.log(data);
      setAnalysisData(calculateSMA(data));
    }
  }, [data]);

  const calculateSMA = (bars) => {
    const smaData = [];
    const sma50 = [];
    const sma200 = [];
    for (let i = 0; i < bars.length; i++) {
      const date = dayjs(bars[i].Timestamp).format("YYYY-MM-DD");
      const vwap = bars[i].VWAP;
      if (i >= 49) {
        const sum50 = bars
          .slice(i - 49, i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avg50 = sum50 / 50;
        sma50.push(avg50);
      }
      if (i >= 199) {
        const sum200 = bars
          .slice(i - 199, i + 1)
          .reduce((total, price) => total + price.VWAP, 0);
        const avg200 = sum200 / 200;
        sma200.push(avg200);
      }
      smaData.push({
        date,
        vwap,
        sSMA: sma50[i - 49] || null,
        lSMA: sma200[i - 199] || null,
      });
    }
    return smaData;
  };

  console.log(analysisData);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default MomentumAlgo;
