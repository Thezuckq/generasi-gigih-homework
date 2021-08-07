/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "..";
import { useSelector } from "react-redux";
import { SIGNIN_URL } from "../../config/constant";
import { Div, Button, Anchor, Tag } from "atomize";
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
          <Div className="buttonLoginAtomize">
            <Anchor href={SIGNIN_URL}>
              <Tag
              bg={"warning700"}
              rounded="xl"
              textColor="white"
              p={{ x: "3rem", y: "1rem" }}
              m={{ r: "0.5rem", b: "0.5rem" }}
              textSize="body"
              >
                Login
              </Tag>
            </Anchor>
          </Div>
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
          <Div justify="center" d="flex">
            <Link to="/create-playlist" className="ActiveButton">
            <Button
            h="4rem"
            p={{ x: "1.75rem" }}
            textSize="body"
            textColor="white"
            bg="success700"
            hoverBg="success600"
            shadow="2"
            hoverShadow="4"
            >
            Create Playlist
            </Button>
            </Link>
          </Div>
        ) : (
          <Div justify="center" d="flex">
            <Button
            h="4rem"
            p={{ x: "1.75rem" }}
            textSize="body"
            textColor="white"
            bg="success700"
            hoverBg="success600"
            shadow="2"
            hoverShadow="4"
            justify="center"
            onClick={handleAlert}>
            Create Playlist
          </Button>
          </Div>
        )}
      </div>
    </div>
  );
}

export default SpotifySearch;