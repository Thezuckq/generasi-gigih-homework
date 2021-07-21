import React from "react";
import { SearchComp } from "..";

function SpotifySearch(props) {
  const { handleChange, handleClick, inputValue } = props;

  return (
    <div className="spotify-search">
      <SearchComp placeholder="Search" handleChange={handleChange} value={inputValue} handleClick={handleClick} />
    </div>
  );
}

export default SpotifySearch;