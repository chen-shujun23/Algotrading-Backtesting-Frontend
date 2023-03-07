import React, { useState, useEffect } from "react";
import useAlpaca from "../hooks/useAlpaca";

const MomentumAlgo = () => {
  const [bars, setBars] = useState([]);
  const [data, error, loading, fetchBars] = useAlpaca();

  useEffect(() => {
    fetchBars("VOO", "2022-02-01", "2022-02-07");
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
    </div>
  );
};

export default MomentumAlgo;
