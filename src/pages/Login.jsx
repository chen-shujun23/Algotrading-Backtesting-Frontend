import React from "react";
import illustration from "../assets/illustrationLogin.png";
import FormLogin from "../components/FormLogin";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="flex w-1/2 justify-center p-10">
        <div className="flex flex-col w-96">
          <h1 className="pb-5">Login</h1>
          <GoogleLogin />
          <div className="flex flex-row">
            <div class="border-t border-brown w-1/2 my-auto"></div>
            <h3 className="px-4">or</h3>
            <div class="border-t border-brown w-1/2 my-auto"></div>
          </div>
          <FormLogin />
        </div>
      </div>
      <div className="flex-col w-1/2 place-content-center p-10">
        <img
          src={illustration}
          alt="Graphic illustration of a woman with a tablet."
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
