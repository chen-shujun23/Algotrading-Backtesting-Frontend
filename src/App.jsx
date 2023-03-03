import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

const NavBar = React.lazy(() => import("./components/NavBar"));
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const Create = React.lazy(() => import("./pages/Create"));
const Discover = React.lazy(() => import("./pages/Discover"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const MyStrategies = React.lazy(() => import("./pages/MyStrategies"));
const Register = React.lazy(() => import("./pages/Register"));
const SearchResults = React.lazy(() => import("./pages/SearchResults"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
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
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
