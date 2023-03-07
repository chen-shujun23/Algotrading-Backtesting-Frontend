import React, { useContext } from "react";
import { GlobalContext } from "../App";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const Home = () => {
  const { userPayload } = useContext(GlobalContext);
  return (
    <>{userPayload && userPayload.is_admin ? <AdminHome /> : <UserHome />}</>
  );
};

export default Home;
