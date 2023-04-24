import React from "react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const GoogleLogin = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (res) => {
    console.log("Encoded JWT ID token" + res.credential);
    let userObject = jwt.decode(res.credential);
    console.log(userObject);
    setUser(userObject);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      shape: "pill",
      width: 384,
    });
  }, []);

  return (
    <div className="flex py-4">
      <div id="signInDiv" className="w-full"></div>
    </div>
  );
};

export default GoogleLogin;
