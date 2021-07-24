import React from "react";
import { ButtonLogin } from "../../components";
import "./index.css";

class Login extends React.Component {
  render() {
    const spotifyScope = "playlist-modify-private"
    const redirURI = "http://localhost:3000/callback"
    const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY}&response_type=${"token"}&redirect_uri=${redirURI}&scope=${spotifyScope}`

    return (
      <div className="Login">
        <h1>Hi Welcome to Spotify KW Super!</h1>
        <img src="https://www.scdn.co/i/_global/open-graph-default.png" width="320px" alt="spotify-logo"></img>
        <h2>Click Button Below to Login</h2>
        <ButtonLogin
          name="Login" 
          url={linkURL}
        />
      </div>
    );
  }
}

export default Login;
