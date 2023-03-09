import React, { useEffect } from "react";
import illustration from "../assets/illustrationAdminRegister.png";
import FormUpdateUser from "../components/FormUpdateUser";
import { useParams } from "react-router-dom";

const AdminUpdate = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("Id:", id);
  }, []);

  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="grid w-1/2 content-center p-10">
        <FormUpdateUser header="Update User" id={id} />
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

export default AdminUpdate;
