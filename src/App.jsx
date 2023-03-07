import React, { useState, createContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./App.css";
import "./index.css";
import config from "../config.js";

import NavBar from "./components/NavBar";
import AdminRegister from "./pages/AdminRegister";
import Create from "./pages/Create";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyStrategies from "./pages/MyStrategies";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";
import useAxios from "./hooks/useAxios";

export const GlobalContext = createContext();

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [data, error, loading, fetchData] = useAxios();

  const refreshToken = localStorage.getItem("refreshToken");
  const userPayload = jwt.decode(accessToken);

  const handleLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (refreshToken) {
      const url = config.BASE_URL + "/users/refresh";
      const method = "POST";
      const body = JSON.stringify({ refresh: refreshToken });
      fetchData(url, method, body);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setAccessToken(data.access);
    }
  }, [data]);

  // console.log("REFRESH: " + refreshToken);
  // console.log("ACCESS: " + accessToken);
  // console.log(userPayload);

  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        userPayload,
        setAccessToken,
        handleLogout,
      }}
    >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {accessToken ? (
            <Route path="/search-results" element={<SearchResults />} />
          ) : null}
          <Route path="/home" element={<Home />} />
          {accessToken && !userPayload.is_admin ? (
            <Route path="/discover" element={<Discover />} />
          ) : null}

          {accessToken && !userPayload.is_admin ? (
            <Route path="/create" element={<Create />} />
          ) : null}

          {accessToken && !userPayload.is_admin ? (
            <Route path="/my-strategies" element={<MyStrategies />} />
          ) : null}

          {accessToken && userPayload.is_admin ? (
            <Route path="/admin-register" element={<AdminRegister />} />
          ) : null}
        </Routes>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
