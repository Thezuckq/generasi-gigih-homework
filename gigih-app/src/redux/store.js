import { configureStore } from "@reduxjs/toolkit";
import credentialReducer from "./credential-slice";
import trackReducer from "./track-slice";

export default configureStore({
  reducer: {
    credential: credentialReducer,
    track: trackReducer,
  },
});