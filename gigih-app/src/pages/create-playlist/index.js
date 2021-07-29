import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { PlaylistForm, TrackListComp, CardTrackComp } from "../../components";
import { getSelectedUri, getSelectedList } from "../../redux/track-slice";
import { checkImageAvailability } from "../../config/utils";
import { SPOTIFY_ENDPOINT } from "../../config/constant";

function CreatePlaylist() {
  const { userId, token, tokenType } = useSelector((state) => state.credential);
  const { selectedList, selectedUri } = useSelector((state) => state.track);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    titlePlaylist: "",
    descPlaylist: "",
  });

  const createPlaylist = async () => {
    const data = {
      name: inputValue.titlePlaylist,
      public: false,
      collaborative: false,
      description: inputValue.descPlaylist,
    };

    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/users/${userId}/playlists`,
      data,
      config
    );

    setInputValue({
      titlePlaylist: "",
      descPlaylist: "",
    });
    addItemToPlaylist(response.data.id);
    alert(`${inputValue.titlePlaylist} Playlist added successfully!`);
  };

  const addItemToPlaylist = async (playlistId) => {
    const data = {
      uris: selectedUri,
    };
    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/playlists/${playlistId}/tracks`,
      data,
      config
    );

    console.log(response);
  };

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
          imgUrl={image[0]}
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

  const handleOnChangePlaylist = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmitPlaylist = async (event) => {
    event.preventDefault();

    if (inputValue.titlePlaylist !== "" && inputValue.descPlaylist !== "") {
      if (
        inputValue.titlePlaylist.length >= 10 &&
        inputValue.descPlaylist.length >= 20
      ) {
        if (selectedUri.length === 0) {
          alert("Please choose tracks you want to add");
        } else {
          await createPlaylist();
        }
      } else {
        alert("Minimum title is 10 character & description is 20");
      }
    } else {
      alert("Please add title and description for your playlist");
    }
  };

  return (
    <div className="PlaylistContainer">
      <h1>Create Playlist</h1>
      <PlaylistForm
        titleValue={inputValue.titlePlaylist}
        descValue={inputValue.descPlaylist}
        handleSubmit={handleSubmitPlaylist}
        onChange={handleOnChangePlaylist}
      />
      <TrackListComp title="User Choice" list={getTrackList(selectedList, false)} />
    </div>
  );
}

export default CreatePlaylist;