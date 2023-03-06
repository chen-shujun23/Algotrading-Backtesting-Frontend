import Alpaca from "@alpacahq/alpaca-trade-api";
import React, { useEffect, useState } from "react";
import config from "../../config.js";
import dayjs from "dayjs";

const AlpacaTrade = () => {
  const alpaca = new Alpaca({
    keyId: config.APCA_API_KEY,
    secretKey: config.APCA_API_SECRET,
    paper: true,
  });

  const [got, setGot] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const start_date = "2022-04-01";
      const end_date = "2022-04-15";

      const stream = alpaca.getBarsV2("AAPL", {
        start: start_date,
        end: end_date,
        timeframe: "1D",
        limit: dayjs(end_date).diff(dayjs(start_date), "day"),
      });
      let bars = [];
      for await (let bar of stream) {
        bars.push(bar);
      }
      setGot(bars);
      console.log(bars);
    };

    fetchBars();
  }, []);

  return <div>{JSON.stringify(got)}</div>;
};

export default AlpacaTrade;
