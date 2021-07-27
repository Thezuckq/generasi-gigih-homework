import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice
export const credentialSlice = createSlice({
  name: "credential",
  initialState: {
    userId: "",
    token: "",
    tokenType: "",
  },
  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
    getToken: (state, action) => {
      state.token = action.payload;
    },
    getTokenType: (state, action) => {
      state.tokenType = action.payload;
    },
  },
});

export const { getToken, getTokenType, getUserId } = credentialSlice.actions;

export default credentialSlice.reducer;

// Action
export const fetchUserId = (token, tokenType) => async (dispatch) => {
  axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
    .then((response) => {
      dispatch(getUserId(response.data.id));
    });
};

export const getHashParams = (url) => (dispatch) => {
  const hashUrl = url.substr(1);
  const hashComponent = new URLSearchParams(hashUrl);
  dispatch(getToken(hashComponent.get("access_token")));
  dispatch(getTokenType(hashComponent.get("token_type")));
};