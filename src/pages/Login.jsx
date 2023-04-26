import React from "react";
import illustration from "../assets/illustrationLogin.png";
import FormLogin from "../components/FormLogin";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <div className="flex h-fit w-2/5 justify-center">
        <div className="flex flex-col h-fit w-96">
          <h1 className="pb-5">Login</h1>
          <GoogleLogin text="signin_with" />
          <div className="flex flex-row">
            <div class="border-t border-brown w-1/2 my-auto"></div>
            <h3 className="px-4">or</h3>
            <div class="border-t border-brown w-1/2 my-auto"></div>
          </div>
          <FormLogin />
        </div>
      </div>
      <div className="flex h-fit w-3/5 justify-center px-20">
        <img
          src={illustration}
          alt="Graphic illustration of a woman with a tablet."
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
