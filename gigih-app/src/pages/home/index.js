import React, { useState, useEffect } from "react";
import { CardTrackComp, SpotifySearch, TrackListComp } from "../../components";
import axios from 'axios';
import './index.css';

function Home() {
  const [query, setQuery] = useState("");
  const [token, setToken] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setToken(getHashParam().get("access_token"));
    setTokenType(getHashParam().get("token_type"));
  }, []);

  const getHashParam = () => {
    let hashUrl = document.location.hash.substr(1);
    let hashComponent = new URLSearchParams(hashUrl);
    return hashComponent;
  };

  const getApiCall = async (query, token, tokenType) => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `${tokenType} ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      params: {
        q: query,
        type: "album,track,artist",
        limit: 3,
      },
    });
    setArtistList([...artistList, ...response.data.artists.items]);
    setTrackList([...trackList, ...response.data.tracks.items]);
    setAlbumList([...albumList, ...response.data.albums.items]);
    console.log(response.data);
  };

  const checkImageAvailability = (list) => {
    let image = [];
    if (list.images.length > 0) {
      list.images.forEach((item) => {
        image.push(item.url);
      });
    } else {
      image = "";
    }
    return image;
  };

  const addToSelected = (data, imageurl) => {
    let arr = [];

    if (selectedList.length === 0) {
      setSelectedList([
        { name: data.name, uri: data.uri, image: imageurl, isSelected: true },
      ]);
    } else {
      setSelectedList([
        ...selectedList,
        { name: data.name, uri: data.uri, image: imageurl, isSelected: true },
      ]);

      selectedList.forEach((value) => {
        if (value.uri === data.uri) {
          arr = selectedList.filter((item) => item.uri !== data.uri);
          console.log(...arr);
        }
      });

      if (arr.length > 0) {
        setSelectedList([...arr]);
      }
    }
  };

  const getSelectedList = (list) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));

    return filter.map((item) => {
      return (
        <CardTrackComp
          imgUrl={item.image}
          trackTitle={item.name}
          btnName={item.isSelected ? "Deselect" : "Select"}
          onClick={() => {
            addToSelected(item, item.image);
          }}
        />
      );
    });
  };

  const getArtistList = (list) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));

    return filter.map((item) => {
      let image = checkImageAvailability(item);
      return (
        <CardTrackComp 
          imgUrl={image[1]}
          altImg={image[0] > 0 ? "An Artist Image" : "No Image Available"}
          artistName={item.type}
          trackTitle={item.name}
          btnName="Select"
          onClick={() => {
            addToSelected(item, image[0]);
          }}
          key={item.uri}
        />
      );
    });
  };

  const getAlbumList = (list) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));

    return filter.map((item) => {
      let image = checkImageAvailability(item);

      return (
        <CardTrackComp 
          imgUrl={image[1]}
          altImg={image[0] > 0 ? "An Artist Image" : "No Image Available"}
          artistName={item.artists[0].name}
          trackTitle={item.name}
          btnName="Select"
          onClick={() => {
            addToSelected(item, image[0]);
          }}
          key={item.uri}
        />
      );
    });
  };

  const getTrackList = (list) => {
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
            btnName="Select"
            onClick={() => {
              addToSelected(item, image[0]);
            }}
            key={item.uri}
          />        
      );
    });
  };

  const handleChange = (event) => setQuery(event.target.value);

  const handleClick = async () => {
    if (query === "") {
      alert("Please fill the search input first");
    } else {
      await getApiCall(query, token, tokenType);
    }
  };

  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {selectedList.length > 0 ? (
            <div>
              <TrackListComp
                title="Selected"
                list={getSelectedList(selectedList)}
                className="selectedByUser"
              />
              <button
                className="ClearHistoryButton"
                onClick={() => {
                  setSelectedList([]);
                }}
              >
                Clear History
              </button>
            </div>
          ) : (
            <></>
          )}
          <TrackListComp title="Artists" list={getArtistList(artistList)} />
          <TrackListComp title="Albums" list={getAlbumList(albumList)} />
          <TrackListComp title="Tracks" list={getTrackList(trackList)} />
        </div>
        );
      } else {
        return <h1 className="NoDataPlaceholder">No Data Available</h1>;
      }
    };
  
    return (
      <div>
        <SpotifySearch
          handleChange={handleChange}
          inputValue={query}
          handleClick={handleClick}
        />
        <div className="SearchResult">{isDataEmpty(trackList)}</div>
      </div>
    );
  }

export default Home;