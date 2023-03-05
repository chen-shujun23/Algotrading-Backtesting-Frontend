import React from "react";
import banner from "../assets/banner.png";
import dayjs from "dayjs";

dayjs().format();

const Footer = () => {
  return (
    <div className="w-screen h-96 flex flex-col">
      <div className="h-2/5">
        <img src={banner} alt="Cityscape" className="object-cover" />
      </div>
      <div className="h-3/5 bg-yellow-light flex flex-col px-20 py-10">
        <h2>Contact Us</h2>
        <div className="flex flex-row pt-3">
          <div>
            <h3>Mailing Address</h3>
            <p>123 Anywhere St, 12-34, Singapore 123456</p>
          </div>
          <div className="px-20">
            <h3>Email Address</h3>
            <p>hello@algobeez.com</p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>+65 6123 4567</p>
          </div>
        </div>
        <p className="text-center pt-6">
          Algobeez © Copyright {dayjs().year()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
