import React from "react";
import illustration from "../assets/illustrationLogin.png";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-yellow-dark flex flex-row p-20">
      <h1>Login</h1>
      <div className="grid w-1/2 place-content-center">
        <img src={illustration} />
      </div>
    </div>
  );
};

export default Login;
