import React from "react";
import { ButtonCompo } from "../../components";
import { API_SCOPE, REDIRECT_URI } from "../../config/constant";
function Login() {

  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY
  }&response_type=${"token"}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

  return (
    <div className="SignIn">
      <ButtonCompo name="Login" link={linkURL} />
    </div>
  );
}

export default Login;