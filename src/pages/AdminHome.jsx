import React, { useContext } from "react";
import PageHeader from "../components/PageHeader";
import UsersTable from "../components/UsersTable";
import illustration from "../assets/illustrationAdminDashboard.png";
import { GlobalContext } from "../App";

const AdminHome = () => {
  const { userPayload } = useContext(GlobalContext);
  return (
    <div>
      <PageHeader
        header={`Welcome back, ${userPayload.first_name}`}
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
      <div className="p-20 bg-yellow-light">
        <UsersTable admin={false} />
        <UsersTable admin={true} />
      </div>
    </div>
  );
};

export default AdminHome;
