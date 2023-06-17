import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const response = await instance.get(`posts`);

    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: (build) => {
    build.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;

//реализован поиск по списку, продолжить изучение react-router-dom
