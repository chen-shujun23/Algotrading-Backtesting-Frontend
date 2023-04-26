import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import useAxios from "../hooks/useAxios";
import { GlobalContext } from "../App";

const GoogleLogin = (props) => {
  const [user, setUser] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
  });
  const [data, error, loading, fetchData] = useAxios();
  const { setAccessToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  const saveToLocalStorage = (token) => {
    localStorage.setItem("refreshToken", token);
  };

  const handleCallbackResponse = (res) => {
    let userObject = jwt.decode(res.credential);
    setUser({
      givenName: userObject.given_name,
      familyName: userObject.family_name,
      email: userObject.email,
      password: "google123$",
    });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      shape: "pill",
      width: 384,
      text: props.text,
    });
  }, []);

  const handleSubmit = () => {
    const url = import.meta.env.VITE_SERVER_URL + "/users/create";
    const method = "PUT";
    const body = {
      given_name: user.givenName,
      family_name: user.familyName,
      email: user.email,
      password: user.password,
      is_admin: false,
      google_acc: true,
    };
    const token = null;
    fetchData(url, method, body, token);
    if (user.email && user.password) {
      const url = import.meta.env.VITE_SERVER_URL + "/users/user-login";
      const method = "POST";
      const body = JSON.stringify(user);
      fetchData(url, method, body);
    }
  };

  useEffect(() => {
    handleSubmit(user);
  }, [user]);

  useEffect(() => {
    if (data) {
      setAccessToken(data.access);
      saveToLocalStorage(data.refresh);
      navigate("/home");
    }
  }, [data]);

  return (
    <div className="flex py-4">
      <div id="signInDiv" className="w-full"></div>
    </div>
  );
};

export default GoogleLogin;
