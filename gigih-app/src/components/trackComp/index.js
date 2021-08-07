import React from "react";
import "./index.css";
import data from "../../data/playlists";

const TrackComp = () => {
  const renderTracks = (data) =>
    data.map((track) => (
      <div className="grid-item" key={track.id}>
        <div className="boxPlaylist">
          <img
            src={track.album.images[1].url}
            alt={track.name}
            className="albumImages"
          />
          <div className="trackInfoWrapper">
            <h2 className="text">{track.name}</h2>
            <h3 className="text">{track.album.name}</h3>
            <h3 className="text">{track.artists[0].name}</h3>
          </div>
          <form target="_blank" action={track.external_urls.spotify}>
            <input type="submit" value="Select" className="buttonSelect" />
          </form>
        </div>
      </div>
    ));

  return <div className="grid-container">{renderTracks(data)}</div>;
};

export default TrackComp;
