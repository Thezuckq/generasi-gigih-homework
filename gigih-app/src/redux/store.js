import { configureStore } from "@reduxjs/toolkit";
import credentialReducer from "./credential-slice";

export default configureStore({
  reducer: {
    credential: credentialReducer,
  },
});