import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SPOTIFY_ENDPOINT } from "../config/constant";

// Slice
export const trackSlice = createSlice({
  name: "track",
  initialState: {
    trackList: [],
    selectedList: [],
    selectedUri: [],
  },
  reducers: {
    getTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    getSelectedList: (state, action) => {
      state.selectedList = action.payload;
    },
    getSelectedUri: (state, action) => {
      state.selectedUri = action.payload;
    },
  },
});

export const { getTrackList, getSelectedList, getSelectedUri } =
  trackSlice.actions;

export default trackSlice.reducer;

// Action
export const searchTrack = (query, token, tokenType) => async (dispatch) => {
  axios
    .get(`${SPOTIFY_ENDPOINT}/search`, {
      headers: {
        Authorization: `${tokenType} ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        q: query,
        type: "album,track,artist",
        limit: 10,
      },
    })
    .then((response) => {
      dispatch(getTrackList([...response.data.tracks.items]));
    });
};