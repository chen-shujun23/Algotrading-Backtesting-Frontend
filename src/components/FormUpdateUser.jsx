import React, { useState, useContext } from "react";
import ButtonSubmit from "./ButtonSubmit";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";
import { GlobalContext } from "../App";

const FormUpdateUser = (props) => {
  const [data, error, loading, fetchData] = useAxios();
  const { accessToken } = useContext(GlobalContext);
  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const updateUser = () => {
    const url = config.BASE_URL + `/users/update/${props.id}`;
    const method = "PUT";
    const body = {
      first_name: update.firstName,
      last_name: update.lastName,
      email: update.email,
    };
    const token = accessToken;
    fetchData(url, method, body, token);
  };

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    window.alert("User is successfully updated.");
    window.location.href = "/home";
  };

  console.log("THIS ID" + props.id);

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
            value={update.firstName}
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
            value={update.lastName}
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
          value={update.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="pt-8 pb-4">
        <ButtonSubmit bgColour="bg-red" innerText="Update" />
      </div>
    </form>
  );
};

export default FormUpdateUser;
