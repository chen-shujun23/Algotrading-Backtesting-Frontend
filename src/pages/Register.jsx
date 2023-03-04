import React from "react";
import illustration from "../assets/illustrationRegister.png";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <h1>Register</h1>
      <div className="grid w-1/2 place-content-center p-10">
        <img
          src={illustration}
          alt="Graphic illustration of a man with a laptop."
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
