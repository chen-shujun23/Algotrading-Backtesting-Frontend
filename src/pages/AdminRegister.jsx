import React from "react";
import illustration from "../assets/illustrationAdminRegister.png";
import FormRegister from "../components/FormRegister";

const AdminRegister = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="grid w-1/2 content-center p-10">
        <FormRegister header="Admin Register" admin={true} />
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

export default AdminRegister;
