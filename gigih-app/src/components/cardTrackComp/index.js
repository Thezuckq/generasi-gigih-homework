/* eslint-disable react/prop-types */
import React from "react";
import { ButtonCompo } from "../../components";
import './index.css';

function CardTrackComp({ imgUrl, altImg, trackTitle, artistName, btnName, enableBtn, onClick }) {
  return (
    <div className="Container">
      <img src={imgUrl} alt={altImg} />
      <h2 className="TrackTitleText">{trackTitle}</h2>
      <p className="ArtistText">{artistName}</p>
      {enableBtn ? (
        <ButtonCompo className="SelectBtn" name={btnName} onClick={onClick} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardTrackComp;