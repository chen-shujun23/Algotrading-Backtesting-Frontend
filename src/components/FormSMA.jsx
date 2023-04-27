import React, { useState, useContext, useEffect } from "react";
import ButtonSubmit from "./ButtonSubmit";
import useAxios from "../hooks/useAxios";
import { GlobalContext } from "../App";

const FormTrend = () => {
  const [variables, setVariables] = useState({
    symbol: "",
    title: "",
    capital: "",
    start_date: "",
    end_date: "",
    qty_shares: "",
    sSMA: "",
    lSMA: "",
  });
  const { accessToken, userPayload } = useContext(GlobalContext);
  const [data, error, loading, fetchData] = useAxios();

  const handleChange = (e) => {
    setVariables({
      ...variables,
      [e.target.id]: e.target.value,
    });
  };

  const createStrategy = () => {
    const url =
      import.meta.env.VITE_SERVER_URL +
      `/strategiesSMA/${userPayload.id}/create-strategies`;
    const method = "POST";
    const body = variables;
    const token = accessToken;
    fetchData(url, method, body, token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStrategy();
    window.alert("You have successfully created a strategy.");
    window.location.href = "/my-strategies";
  };

  return (
    <form className="flex flex-col p-10" onSubmit={handleSubmit}>
      <h3>Basic Variables</h3>
      <div className="flex flex-col">
        <span className="p-4">Title</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="title"
          type="text"
          placeholder="AAPL Moving Average Crossover"
          value={variables.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-col w-1/2">
          <span className="p-4">Symbol</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="symbol"
            type="text"
            placeholder="AAPL"
            value={variables.symbol}
            onChange={handleChange}
            required
            pattern="^[A-Z]{1,5}$"
            title="Symbol must be a valid ticker."
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span className="p-4">Capital</span>
          <div className="flex flex-row">
            <span className="prefix p-3">US$</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="capital"
              type="number"
              placeholder="10000"
              value={variables.capital}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-col w-1/2">
          <span className="p-4">Date Start</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="start_date"
            type="date"
            value={variables.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span className="p-4">Date End</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="end_date"
            type="date"
            value={variables.end_date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <h3 className="pt-4">Quantity of Shares to Buy/ Sell</h3>
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-col w-1/2">
          <span className="p-4">Quantity of Shares</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="qty_shares"
            type="number"
            placeholder="5"
            value={variables.qty_shares}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <h3 className="py-4">Buy / Sell Conditions</h3>
      <div className="bg-yellow-light p-4 rounded-3xl">
        <div className="flex flex-row w-full gap-5">
          <span className="text-center mt-auto mb-2">If</span>
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="sSMA"
              type="number"
              placeholder="50"
              value={variables.sSMA}
              onChange={handleChange}
              required
            />
          </div>
          <p className="text-center mt-auto mb-2 w-1/5">
            Crosses Over
            <br />
            Crosses Below
          </p>
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="lSMA"
              type="number"
              placeholder="200"
              value={variables.lSMA}
              onChange={handleChange}
              required
            />
          </div>
          <p className="text-center mt-auto mb-2">
            Buy
            <br />
            Sell
          </p>
        </div>
      </div>

      <div className="pt-8 pb-4">
        <ButtonSubmit bgColour="bg-red" innerText="Submit" />
      </div>
    </form>
  );
};

export default FormTrend;
