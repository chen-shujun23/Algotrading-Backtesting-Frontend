import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";

const FormLogin = (props) => {
  const [loginType, setLoginType] = useState(props.header);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [data, error, loading, fetchData] = useAxios();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = config.BASE_URL + "/users/user-login";
    const method = "POST";
    const body = JSON.stringify(login);
    fetchData(url, method, body);
  };

  return (
    <form className="flex flex-col pr-10" onSubmit={handleSubmit}>
      <h1 className="pb-5">{props.header}</h1>
      <div className="flex flex-col">
        <span className="p-4">Email Address</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="email"
          type="email"
          placeholder="zac@example.com"
          value={login.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col">
        <span className="p-4">Password</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="password"
          type="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Password must have minimum eight characters, at least one letter, one number and one special character."
        />
      </div>
      <div className="pt-8 pb-4">
        <ButtonSubmit bgColour="bg-red" innerText="Log In" />
      </div>
      <a href="" className="text-sm text-stone-500 hover:underline">
        Forgot Your Password?
      </a>
      {loginType === "User Login" ? (
        <a href="/register" className="text-sm text-stone-500 hover:underline">
          New here?
        </a>
      ) : null}
    </form>
  );
};

export default FormLogin;
