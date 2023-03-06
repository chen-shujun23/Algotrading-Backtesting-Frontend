import React from "react";
import PageHeader from "../components/PageHeader";
import UsersTable from "../components/TableUsers";
import TableAdmin from "../components/TableAdmin";
import illustration from "../assets/illustrationAdminDashboard.png";

const AdminDashboard = () => {
  return (
    <div>
      <PageHeader
        header="Welcome, Admin"
        copy='"The only way to do great work is to love what you do." - Steve Jobs.'
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
      <div className="p-20 bg-yellow-light">
        <UsersTable />
        <TableAdmin />
      </div>
    </div>
  );
};

export default AdminDashboard;
