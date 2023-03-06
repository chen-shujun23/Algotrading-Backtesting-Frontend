import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const FormMomentum = (props) => {
  const [momentum, setMomentum] = useState({
    title: "",
    symbol: "",
    capital: "",
    start_date: "",
    end_date: "",
    qty_shares_buy: "",
    qty_shares_sell: "",
    short_term_sma_buy: "",
    long_term_sma_buy: "",
    short_term_sma_sell: "",
    long_term_sma_sell: "",
    is_history: false,
  });

  const handleChange = (e) => {
    setMomentum({
      ...momentum,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (momentum.password !== momentum.confirmPassword) {
      window.alert("Passwords do not match. Please try again.");
      return;
    } else {
      console.log(`Register ${JSON.stringify(momentum)}`);
      window.alert("You have successfully created a strategy.");
      // window.location.href = "/my-strategies";
    }
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
          value={momentum.title}
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
            value={momentum.symbol}
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
              value={momentum.capital}
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
            value={momentum.start_date}
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
            value={momentum.end_date}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <h3 className="py-4">Buy Condition</h3>
      <div className="bg-yellow-light p-4 rounded-3xl">
        <div className="flex flex-row w-full gap-5">
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="short_term_sma_buy"
              type="number"
              placeholder="50"
              value={momentum.short_term_sma_buy}
              onChange={handleChange}
              required
            />
          </div>
          <span className="text-center mt-auto mb-4 w-1/5">Crosses Over</span>
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="long_term_sma_buy"
              type="number"
              placeholder="200"
              value={momentum.long_term_sma_buy}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <h3 className="py-4">Sell Condition</h3>
      <div className="bg-yellow-light p-4 rounded-3xl">
        <div className="flex flex-row w-full gap-5">
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="short_term_sma_sell"
              type="number"
              placeholder="50"
              value={momentum.short_term_sma_sell}
              onChange={handleChange}
              required
            />
          </div>
          <span className="text-center mt-auto mb-4 w-1/5">Crosses Below</span>
          <div className="flex flex-col w-2/5">
            <span className="p-4">Simple Moving Average</span>
            <input
              className="h-12 w-full px-4 rounded-full mt-auto"
              id="long_term_sma_sell"
              type="number"
              placeholder="200"
              value={momentum.long_term_sma_sell}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <h3 className="pt-4">Quantity of Shares to Buy/ Sell</h3>
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-col w-1/2">
          <span className="p-4">Buy</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="qty_shares_buy"
            type="number"
            placeholder="5"
            value={momentum.qty_shares_buy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span className="p-4">Sell</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="qty_shares_sell"
            type="number"
            placeholder="5"
            value={momentum.qty_shares_sell}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="pt-8 pb-4">
        <ButtonSubmit bgColour="bg-red" innerText="Submit" />
      </div>
    </form>
  );
};

export default FormMomentum;
