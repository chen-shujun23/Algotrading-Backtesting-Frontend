import React from "react";
import illustration from "../assets/illustrationRegister.png";
import FormRegister from "../components/FormRegister";
import GoogleLogin from "../components/GoogleLogin";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="flex w-2/5 h-fit justify-center">
        <div className="flex flex-col h-fit w-96">
          <h1 className="pb-5">User Register</h1>
          <GoogleLogin text="signup_with" />
          <div className="flex flex-row">
            <div class="border-t border-brown w-1/2 my-auto"></div>
            <h3 className="px-4">or</h3>
            <div class="border-t border-brown w-1/2 my-auto"></div>
          </div>
          <FormRegister admin={false} />
        </div>
      </div>
      <div className="flex h-fit w-3/5 justify-center px-20 pt-20">
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
