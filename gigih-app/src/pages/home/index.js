import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardTrackComp,
  SpotifySearch,
  TrackListComp,
} from "../../components";
import axios from "axios";
import "./index.css";
import {
  getHashParams,
  getIsLoggedIn,
  getUserId,
  getImageUrl
} from "../../redux/credential-slice";
import {
  getSelectedList,
  getSelectedUri,
  searchTrack,
} from "../../redux/track-slice";
import { SPOTIFY_ENDPOINT } from "../../config/constant";
import { checkImageAvailability } from "../../config/utils";

function Home() {
  const { token, tokenType, imgUrl, isLoggedin } = useSelector(
    (state) => state.credential
  );
  const { trackList, selectedList, selectedUri } = useSelector(
    (state) => state.track
  );
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    dispatch(getHashParams(document.location.hash));
  }, [dispatch])

  useEffect(() => {
    if (token) {
      fetchUserId(token, tokenType);
      dispatch(getIsLoggedIn(true));
    } 
  });

  // API Call
  const fetchUserId = (token, tokenType) => {
    axios
      .get(`${SPOTIFY_ENDPOINT}/me`, {
        headers: {
          Authorization: `${tokenType} ${token}`,
        },
      })
      .then((response) => {
        dispatch(getUserId(response.data.id));
        dispatch(getImageUrl(response.data.images[0].url));
      });
  };

  // Handle Input change
  const handleChange = (event) => setQuery(event.target.value);

  // Handle onClick / Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query === "") {
      alert("Please fill the search input first");
    } else {
      if (isLoggedin) {
        const keyword = query.replace(" ", "+");
        dispatch(searchTrack(keyword, token, tokenType));
        setQuery("");
        console.log(token);
      } else {
        alert("Please Login first");
      }
    }
  };

  // Handle list
  const handleSelectedTrack = (trackUri, data) => {
    if (selectedUri.includes(trackUri)) {
      dispatch(
        getSelectedUri([...selectedUri.filter((uri) => uri !== trackUri)])
      );
      const filter = selectedList.filter((item) => item.uri !== trackUri);
      dispatch(getSelectedList([...filter]));
    } else {
      dispatch(getSelectedUri([...selectedUri, trackUri]));
      dispatch(getSelectedList([...selectedList, data]));
    }
  };

  const getTrackList = (list, enableBtn) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));
    return filter.map((item) => {
      let artist = "";
      if (item.artists.length > 1) {
        item.artists.forEach((value) => {
          artist += `${value.name} ft. `;
        });
      } else {
        artist = item.artists[0].name;
      }

      let image = checkImageAvailability(item.album);

      return (
        <CardTrackComp
          imgUrl={image[1]}
          altImg={image[0] > 0 ? "An Track Image" : "No Image Available"}
          artistName={artist}
          trackTitle={item.name}
          btnName={selectedUri.includes(item.uri) ? "Deselect" : "Select"}
          enableBtn={enableBtn}
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {selectedList.length > 0 ? (
            <div>
              <TrackListComp
                title="Selected"
                list={getTrackList(selectedList, false)}
                className="selectedByUser"
              />
            </div>
          ) : (
            <></>
          )}
          <TrackListComp title="Tracks" list={getTrackList(trackList, true)} />
        </div>
      );
    } else {
      return <h1 className="NoDataPlaceholder">No Data Available</h1>;
    }
  };

  return (
    <div>
      {/* { isLoggedin ? <Redirect to="/home" /> : null } */}
      {console.log(token)}
      <SpotifySearch
        handleChange={handleChange}
        inputValue={query}
        handleSubmit={handleSubmit}
        isUserLoggedin={isLoggedin}
        imgUrl={imgUrl}
      />
      <div className="SearchResult">{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;
