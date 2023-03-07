import React, { useState, createContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/NavBar";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";
import Create from "./pages/Create";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyStrategies from "./pages/MyStrategies";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";

export const GlobalContext = createContext();

function App() {
  const [accessToken, setAccessToken] = useState("");
  console.log(`this is the access token ${accessToken}`);

  const handleLogout = () => {
    setAccessToken("");
  };

  return (
    <GlobalContext.Provider
      value={{ accessToken, setAccessToken, handleLogout }}
    >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-strategies" element={<MyStrategies />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
