import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
        <div className="w-1/2 flex flex-col pr-10">
          <h1>
            Algo Trading
            <br /> made easy
          </h1>
          <span> &nbsp;</span>
          <span>
            Are you interested in investing in the stock market but want to test
            your investment strategies before putting your money on the line?
          </span>
          <span> &nbsp;</span>
          <span>
            Our platform is specifically designed for beginners who want to
            access trading strategies to identify opportunities in the market.
            You don't need to know how to code or have extensive market analysis
            experience to get started.
          </span>
          <span> &nbsp;</span>
          <Button type="button" bgColour="bg-red" innerText="Get Started" />
        </div>
      </div>
      <div className="w-screen h-screen bg-yellow-light flex flex-row p-20"></div>
    </div>
  );
};

export default Home;
