import React from "react";
import illustration from "../assets/illustrationAdminLogin.png";
import FormLogin from "../components/FormLogin";

const AdminLogin = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="grid w-1/2 content-center p-10">
        <FormLogin header="Admin Login" />
      </div>
      <div className="grid w-1/2 place-content-center p-10">
        <img
          src={illustration}
          alt="Graphic illustration of a woman with a tablet."
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
