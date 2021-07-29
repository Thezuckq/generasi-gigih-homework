import { createSlice } from "@reduxjs/toolkit";

// Slice
export const credentialSlice = createSlice({
  name: "credential",
  initialState: {
    userId: "",
    token: "",
    tokenType: "",
    imgUrl: "",
    isLoggedin: false,
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
    getImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    getIsLoggedIn: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { getToken, getTokenType, getUserId, getImageUrl, getIsLoggedIn } = credentialSlice.actions;

export default credentialSlice.reducer;

export const getHashParams = (url) => (dispatch) => {
  const hashUrl = url.substr(1);
  const hashComponent = new URLSearchParams(hashUrl);
  dispatch(getToken(hashComponent.get("access_token")));
  dispatch(getTokenType(hashComponent.get("token_type")));
};