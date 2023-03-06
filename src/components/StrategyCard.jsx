import React, { useState, useEffect } from "react";
import useAlpaca from "../hooks/useAlpaca";

const StrategyCard = () => {
  const [bars, setBars] = useState([]);
  const [data, error, loading, fetchBars] = useAlpaca();

  useEffect(() => {
    fetchBars("AAPL", "2022-02-01", "2022-03-01");
  }, []);

  useEffect(() => {
    if (data) {
      setBars(data);
      console.log(bars);
    }
  }, [data]);

  return (
    <div>
      <p>{JSON.stringify(bars)}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: Data not found</p>}
    </div>
  );
};

export default StrategyCard;
