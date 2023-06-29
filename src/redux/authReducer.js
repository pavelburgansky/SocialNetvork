import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  id: null,
  email: null,
  login: null,
  isLogin: 1,
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      //state = action.payload;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.login = action.payload.login;
    },
    setisLogin: (state, action) => {
      debugger;
      state.isLogin = action.payload;
    },
  },
});
export const { setAuth, setisLogin } = authSlice.actions;
export default authSlice.reducer;

export const authentificationUser = createAsyncThunk(
  "fetch/authUserData",
  async (_, thunkAPI) => {
    let url = "https://social-network.samuraijs.com/api/1.0/auth/me";
    const response = await axios.get(url, { withCredentials: true });
    console.log(response.data.data);
    const { email, id, login } = response.data.data;
    thunkAPI.dispatch(setAuth({ email, id, login }));
    thunkAPI.dispatch(setisLogin(response.data.resultCode));
  }
);
// const authReducer = (state = inicialState, action) => {
//   switch (action.type) {
//     case "AUTH":
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export const authActionCreator = createAction("AUTH");
// export default authReducer;
