import React, { useState, useContext, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import UsersTable from "../components/UsersTable";
import illustration from "../assets/illustrationAdminDashboard.png";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";
import { GlobalContext } from "../App";

const AdminHome = () => {
  const { userPayload, accessToken } = useContext(GlobalContext);
  const [data, error, loading, fetchData] = useAxios();
  const [allUsers, setAllUSers] = useState([]);

  const getAllUsers = () => {
    const url = config.BASE_URL + "/users/all-users";
    const method = "GET";
    const body = null;
    const token = accessToken;
    fetchData(url, method, body, token);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (data) {
      setAllUSers(data);
    }
  }, [data]);

  const onDelete = (id) => {
    setAllUSers((currentUsers) => {
      const foundUserIndex = currentUsers.findIndex((user) => user.id === id);
      // If we find the user with matching ID, remove it
      if (foundUserIndex !== undefined) currentUsers.splice(foundUserIndex, 1);
      return currentUsers;
    });
  };

  return (
    <div>
      <PageHeader
        header={`Welcome back, ${userPayload.first_name}`}
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
      <div className="p-20 bg-yellow-light">
        <UsersTable admin={false} allUsers={allUsers} onDelete={onDelete} />
        <UsersTable admin={true} allUsers={allUsers} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AdminHome;
