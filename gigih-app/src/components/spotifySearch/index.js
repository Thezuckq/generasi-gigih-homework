/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "..";
import { useSelector } from "react-redux";
import { SIGNIN_URL } from "../../config/constant";

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
      <h1>Spotify KW Super</h1>
      <SearchForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
      />
      <div className="LeftSideNav">
        {selectedList.length > 0 && isUserLoggedin ? (
          <Link to="/create-playlist" className="ActiveButton">
            Create Playlist
          </Link>
        ) : (
          <button className="PlaylistButton" onClick={handleAlert}>
            Create Playlist
          </button>
        )}
        {imgUrl !== "" ? (
          <img src={imgUrl} alt="" className="ProfileImage" />
        ) : (
          <a className="LoginButton" href={SIGNIN_URL}>
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default SpotifySearch;