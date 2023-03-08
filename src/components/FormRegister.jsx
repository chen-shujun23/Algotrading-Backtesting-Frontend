import React, { useState, useEffect } from "react";
import ButtonSubmit from "./ButtonSubmit";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";

const FormRegister = (props) => {
  const [data, error, loading, fetchData] = useAxios();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const createUser = () => {
    const url = config.BASE_URL + "/users/create";
    const method = "PUT";
    const isAdmin = props.admin ? true : false;
    const body = {
      first_name: register.firstName,
      last_name: register.lastName,
      email: register.email,
      password: register.password,
      is_admin: isAdmin,
    };
    const token = null;
    fetchData(url, method, body, token);
  };

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      window.alert("Passwords do not match. Please try again.");
      return;
    } else {
      createUser();
      window.alert("You have successfully registered.");
      window.location.href = "/home";
    }
  };

  return (
    <form className="flex flex-col pr-10" onSubmit={handleSubmit}>
      <h1 className="pb-5">{props.header}</h1>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col w-1/2">
          <span className="p-4">First Name</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="firstName"
            type="text"
            placeholder="Zac"
            value={register.firstName}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z ]{2,30}$"
            title="Name must be 2 to 30 letters only"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span className="p-4">Last Name</span>
          <input
            className="h-12 w-full px-4 rounded-full mt-auto"
            id="lastName"
            type="text"
            placeholder="Ong"
            value={register.lastName}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z ]{2,30}$"
            title="Name must be 2 to 30 letters only"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="p-4">Email Address</span>
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
        <span className="p-4">Password</span>
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
        <span className="p-4">Confirm Password</span>
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
