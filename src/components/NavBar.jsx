import React, { useState } from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex h-24 w-screen bg-yellow-dark px-20 justify-between items-center absolute sticky top-0 z-20">
      <div className="flex h-1/2 items-center">
        <a href="/home">
          <img src={logo} alt="AlgoBeez logo" className="h-16" />
        </a>
        <SearchBar />
      </div>
      <div className="flex w-1/2 justify-between items-center">
        <div className="w-24 flex justify-center">
          <a href="/create/" className="hover:font-bold">
            Create
          </a>
        </div>
        <div className="w-36 flex justify-center">
          <a href="/my-strategies/" className="hover:font-bold">
            My Strategies
          </a>
        </div>
        <div className="w-28 flex justify-center">
          <a href="/discover/" className="hover:font-bold">
            Discover
          </a>
        </div>
        <div className="w-24 flex justify-center">
          <a href="/register/" className="hover:font-bold">
            Register
          </a>
        </div>
        <div className="w-24 flex justify-center">
          <a href="/login/" className="hover:font-bold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
