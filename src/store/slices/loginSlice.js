import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "6b94c537-c724-4526-abc4-a919bf086fc0",
  },
});

export const postLoginAsync = createAsyncThunk(
  "login/postLoginAsync",
  async ({ login, password }, { dispatch }) => {
    const response = await instance.post(`auth/login`, {
      email: login,
      password: password,
      rememberMe: true,
    });
    dispatch(postLogin(response.data.data.userId));
    console.log(response.data.data.userId);
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: ";dfd",
  },
  reducers: {
    postLogin(state, action) {
      state.login = action.payload;
    },
  },
});

const { postLogin } = loginSlice.actions;
export default loginSlice.reducer;
