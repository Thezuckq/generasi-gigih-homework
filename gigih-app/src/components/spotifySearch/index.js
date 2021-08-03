/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "..";
import { useSelector } from "react-redux";
import { SIGNIN_URL } from "../../config/constant";
import "./index.css";

function SpotifySearch({
  handleChange,
  handleSubmit,
  inputValue,
  isUserLoggedin,
  imgUrl,
}) {
  const { selectedList } = useSelector((state) => state.track);

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  return (
    <div className="Navbar">
      <div className="LeftSideNav">
        {imgUrl !== "" ? (
          <img src={imgUrl} alt="" className="ProfileImage" />
        ) : (
          <a className="LoginButton" href={SIGNIN_URL}>
            Login
          </a>
        )}
        <SearchForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
        />
      </div>
      <div className="container-search"> 
        {selectedList.length > 0 && isUserLoggedin ? (
          <Link to="/create-playlist" className="ActiveButton">
            Create Playlist
          </Link>
        ) : (
          <button className="CreatePlaylistButton" onClick={handleAlert}>
            Create Playlist
          </button>
        )}
      </div>
    </div>
  );
}

export default SpotifySearch;