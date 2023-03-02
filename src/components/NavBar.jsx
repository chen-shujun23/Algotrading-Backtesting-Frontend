import React from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex h-24 w-screen bg-yellow-dark px-20">
      <img src={logo} alt="AlgoBeez logo" className="h-1/2 self-center" />
      <SearchBar />
    </div>
  );
};

export default NavBar;
