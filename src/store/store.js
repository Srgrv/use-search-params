import { configureStore } from "@reduxjs/toolkit";

//slices
import loginSlice from "./slices/loginSlice";
import postsSlice from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    posts: postsSlice,
  },
});

export default store;
