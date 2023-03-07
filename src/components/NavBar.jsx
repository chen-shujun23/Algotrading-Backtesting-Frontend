import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import { GlobalContext } from "../App";

const NavBar = () => {
  const { accessToken, handleLogout, userPayload } = useContext(GlobalContext);
  return (
    <div className="flex h-24 w-screen bg-yellow-dark px-20 justify-between items-center absolute sticky top-0 z-20">
      <div className="flex h-1/2 items-center">
        <a href="/home">
          <img src={logo} alt="AlgoBeez logo" className="h-16" />
        </a>
        {accessToken ? <SearchBar /> : null}
      </div>
      <div className="flex w-1/2 justify-between items-center">
        <div className="w-24 flex justify-center">
          {accessToken && !userPayload.is_admin ? (
            <a href="/create" className="hover:font-bold">
              Create
            </a>
          ) : null}
        </div>
        <div className="w-36 flex justify-center">
          {accessToken && !userPayload.is_admin ? (
            <a href="/my-strategies" className="hover:font-bold">
              My Strategies
            </a>
          ) : null}
        </div>
        <div className="w-28 flex justify-center">
          {accessToken && !userPayload.is_admin ? (
            <a href="/discover" className="hover:font-bold">
              Discover
            </a>
          ) : null}
        </div>

        <div className="w-24 flex justify-center">
          {accessToken ? (
            <a href="/login" onClick={handleLogout} className="hover:font-bold">
              Logout
            </a>
          ) : (
            <a href="/login" className="hover:font-bold">
              Login
            </a>
          )}
        </div>
        <div className="w-24 flex justify-center">
          {accessToken ? null : (
            <a href="/register" className="hover:font-bold">
              Register
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
