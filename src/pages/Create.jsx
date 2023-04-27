import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ButtonStrategy from "../components/ButtonStrategy";
import FormSMA from "../components/FormSMA";
import illustration from "../assets/illustrationCreate.png";

const Create = () => {
  const strategies = [
    "Simple Moving Averages",
    "Exponential Moving Averages",
    "Bollinger Band",
    "Stochastic Oscillator",
    "Relative Strength Index",
    "MACD Indicator",
    "On-balance Volume",
  ];

  const [form, setForm] = useState("Simple Moving Averages");

  const handleClick = (e) => {
    const buttonText = e.target.textContent;
    setForm(buttonText);
  };

  return (
    <div>
      <PageHeader
        header="Create Strategy"
        copy="Create your own strategy by selecting one of the strategy forms and filling in the details of your winning strategy."
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
      <div className="w-screen bg-yellow-light p-20 flex flex-row gap-20">
        <div className="w-1/4 text-center">
          <h2 className="mb-4">Technical Indicators</h2>
          <div className="bg-yellow-dark rounded-3xl grid grid-rows-auto ">
            {strategies.map((item, index) => (
              <ButtonStrategy
                key={index}
                onClick={handleClick}
                strategy={item}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-center">
          <h2 className="mb-4 text-center ">{form}</h2>
          <div className="bg-yellow-dark w-full rounded-3xl grid grid-rows-auto px-8">
            {form == "Simple Moving Averages" ? <FormSMA /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
