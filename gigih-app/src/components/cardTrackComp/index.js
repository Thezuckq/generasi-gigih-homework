/* eslint-disable react/prop-types */
import React from "react";
import { ButtonCompo } from "../../components";
import { Div, Container } from "atomize";
import './index.css';

function CardTrackComp({ imgUrl, altImg, trackTitle, artistName, btnName, enableBtn, onClick }) {
  return (
    <Container className="cardTrack">
      <img src={imgUrl} alt={altImg} className="albumImages"/>
      <Div className="trackInfoWrapper">
        <h2 className="TrackTitleText">{trackTitle}</h2>
        <p className="ArtistText">{artistName}</p>
        {enableBtn ? (
          <ButtonCompo className="SelectBtn" name={btnName} onClick={onClick} />
        ) : (
          <></>
        )}
      </Div>
    </Container>
  );
}

export default CardTrackComp;