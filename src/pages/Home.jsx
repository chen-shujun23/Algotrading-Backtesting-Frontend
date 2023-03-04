import React, { useState } from "react";
import Button from "../components/Button";
import Accordion from "../components/Accordian";
import illustration from "../assets/illustrationHome.png";
import iconKeyboard from "../assets/iconKeyboard.svg";
import iconForm from "../assets/iconForm.svg";
import iconGraph from "../assets/iconGraph.svg";

const AccordionCopy = [
  {
    id: 1,
    header: "What is AlgoBeez?",
    body: "AlgoBeez is a platform that allows you to backtest your investment strategies using historical market data to see how they would have performed in the past.",
  },
  {
    id: 2,
    header: "What are the benefits of backtesting?",
    body: "Backtesting allows you to refine your strategies, test new ideas, and gain confidence in your investment decisions. With AlgoBeez, you can backtest with ease and take your investment game to the next level.",
  },
  {
    id: 3,
    header: "Why choose AlgoBeez?",
    body: "AlgoBeez is easy to use and requires no programming skills. Simply create your strategy using our forms or select one of our curated strategies in the discover section.",
  },
  {
    id: 4,
    header: "What types of strategies can be tested?",
    body: "AlgoBeez can test a wide range of trading strategies, including technical analysis-based strategies such as moving average crossovers, momentum trading, and mean reversion, as well as fundamental analysis-based strategies such as value investing and quantitative factor investing.",
  },
];

const Home = () => {
  const [accordionId, setAccordianId] = useState(1);

  const handleObjId = (id) => {
    setAccordianId(id);
  };
  return (
    <div>
      <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
        <div className="w-1/2 flex flex-col justify-center pr-10">
          <h1>
            Algo Trading
            <br /> made easy
          </h1>
          <span className="pt-5">
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
          <Button
            type="button"
            bgColour="bg-red"
            innerText="Get Started"
            link="/register"
            className="pt-24"
          />
        </div>
      </div>
      <div className="w-screen h-screen bg-yellow-light flex flex-row p-20">
        <div className="grid w-1/2 place-content-center p-10">
          <img
            src={illustration}
            alt="Graphic illustration of a woman with a tablet."
            className="object-cover"
          />
        </div>
        <div className="grid w-1/2 p-10">
          <h1>FAQ</h1>
          {AccordionCopy.map((item, index) => {
            return (
              <Accordion
                key={index}
                id={item.id}
                header={item.header}
                body={item.body}
                onSave={handleObjId}
              />
            );
          })}
        </div>
      </div>
      <div className="w-screen h-screen bg-yellow-dark flex flex-col p-20 justify-center">
        <h1 className="text-center pb-12">Here's how it works</h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col text-center items-center w-64 h-96 mx-10">
            <img
              src={iconKeyboard}
              alt="keyboard icon"
              className="object-contain h-44 w-44"
            />
            <h3 className="pt-4">01 Create an account</h3>
            <span>Free to sign up. Just fill out your personal details.</span>
            <Button
              type="button"
              bgColour="bg-red"
              innerText="Get Started"
              link="/register"
              className="mt-auto"
            />
          </div>
          <div className="flex flex-col text-center items-center w-64 h-96 mx-10">
            <img
              src={iconForm}
              alt="form icon"
              className="object-contain h-44 w-44"
            />
            <h3 className="pt-4">02 Strategise</h3>
            <span>
              Create your strategy using our forms or select one of our curated
              strategies in the discover section.
            </span>
            <Button
              type="button"
              bgColour="bg-blue"
              innerText="Discover"
              link="/discover"
              className="mt-auto"
            />
          </div>
          <div className="flex flex-col text-center items-center w-64 h-96 mx-10">
            <img
              src={iconGraph}
              alt="lightbulb and graph icon"
              className="object-contain h-44 w-44"
            />
            <h3 className="pt-4">03 Backtest</h3>
            <span>
              Backtest your investment strategies using our historical market
              data. Refine your strategies and don't be afraid to test new
              ideas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
