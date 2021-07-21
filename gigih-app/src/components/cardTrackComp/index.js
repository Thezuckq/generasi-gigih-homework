import React from "react";
import { ButtonComp } from "..";
import './index.css';

function CardTrackComp({ imgUrl, altImg, trackTitle, artistName, btnName, btnUrl }) {
  return (
    <div className="cardTrack">
      <img src={imgUrl} alt={altImg} className="albumImages" />
      <h2 className="text">{trackTitle}</h2>
      <h4 className="text">{artistName}</h4>
      <ButtonComp className="buttonSelect" name={btnName} url={btnUrl}/>
    </div>
  );
}

export default CardTrackComp;