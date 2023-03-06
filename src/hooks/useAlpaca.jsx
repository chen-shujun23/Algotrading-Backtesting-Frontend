import { useState } from "react";
import config from "../../config.js";
import Alpaca from "@alpacahq/alpaca-trade-api";
import dayjs from "dayjs";

const useAlpaca = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //Instantiate the Alpaca class and define the parameters that go along with it
  const alpaca = new Alpaca({
    keyId: config.APCA_API_KEY,
    secretKey: config.APCA_API_SECRET,
    paper: true,
  });

  const fetchBars = async (symbol, start_date, end_date) => {
    try {
      setLoading(true);
      const stream = alpaca.getBarsV2(symbol, {
        start: start_date,
        end: end_date,
        timeframe: "1D",
        limit: dayjs(end_date).diff(dayjs(start_date), "day"),
      });
      let bars = [];
      for await (let bar of stream) {
        bars.push(bar);
      }
      setData(bars);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [data, error, loading, fetchBars];
};

export default useAlpaca;
