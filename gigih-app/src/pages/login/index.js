import React from "react";
import axios from "axios";
import { Button } from "../../components";
import { API_SCOPE, REDIRECT_URI } from "../../config/constant";
function Login() {

  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${
    process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY
  }&response_type=${"token"}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

  return (
    <div className="SignIn">
      <Button name="Login" link={linkURL} />
    </div>
  );
}

export default Login;