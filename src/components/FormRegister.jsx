import React, { useState, useEffect, useContext, useRef } from "react";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { GlobalContext } from "../App";

const FormRegister = (props) => {
  const [register, setRegister] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [user, setUser] = useState({});
  const [data, error, loading, fetchData] = useAxios();
  const { setAccessToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  const saveToLocalStorage = (token) => {
    localStorage.setItem("refreshToken", token);
  };

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = () => {
    setUser(register);
  };

  useEffect(() => {
    handleRegister();
  }, [register]);

  const createUser = async () => {
    const url = import.meta.env.VITE_SERVER_URL + "/users/create";
    const method = "PUT";
    const isAdmin = props.admin ? true : false;
    const body = {
      given_name: user.givenName,
      family_name: user.familyName,
      email: user.email,
      password: user.password,
      is_admin: isAdmin,
      google_acc: false,
    };
    const token = null;
    await fetchData(url, method, body, token);
    if (user.email && user.password) {
      const urlLogin = import.meta.env.VITE_SERVER_URL + "/users/user-login";
      const methodLogin = "POST";
      const bodyLogin = JSON.stringify(user);
      await fetchData(urlLogin, methodLogin, bodyLogin);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      window.alert("Passwords do not match. Please try again.");
      return;
    } else {
      createUser();
      window.alert("You have successfully registered.");
    }
  };

  useEffect(() => {
    if (data && data.access && data.refresh) {
      setAccessToken(data.access);
      saveToLocalStorage(data.refresh);
      navigate("/home");
    }
  }, [data]);

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col w-1/2">
          <span className="p-2">Given Name</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="givenName"
            type="text"
            placeholder="Zac"
            value={register.givenName}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z ]{2,30}$"
            title="Name must be 2 to 30 letters only"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span className="p-2">Family Name</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="familyName"
            type="text"
            placeholder="Ong"
            value={register.familyName}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z ]{2,30}$"
            title="Name must be 2 to 30 letters only"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="p-2">Email Address</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="email"
          type="email"
          placeholder="zac@example.com"
          value={register.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col">
        <span className="p-2">Password</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="password"
          type="password"
          placeholder="password"
          value={register.password}
          onChange={handleChange}
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Password must have minimum eight characters, at least one letter, one number and one special character."
        />
      </div>
      <div className="flex flex-col">
        <span className="p-2">Confirm Password</span>
        <input
          className="h-12 w-full px-4 rounded-full mt-auto"
          id="confirmPassword"
          type="password"
          placeholder="password"
          value={register.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="pt-8 pb-4">
        <ButtonSubmit bgColour="bg-red" innerText="Register" />
      </div>
    </form>
  );
};

export default FormRegister;
