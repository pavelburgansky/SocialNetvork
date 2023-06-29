import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  postsData: [
    {
      id: 1,
      message: "Приветикс",
      likePost: 0,
    },
    {
      id: 2,
      message: "Здарова вуй",
      likePost: 30,
    },
    {
      id: 3,
      message: "Здарова Стээээс",
      likePost: 777,
    },
  ],
  newPostText: "",
  profileData: null,
  isFetching: true,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state) => {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likePost: 0,
      };
      state.postsData = [...state.postsData];
      state.postsData.push(newPost);
      state.newPostText = "";
    },
    updateNewPostText: (state, action) => {
      state.newPostText = action.payload;
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    toggleIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});
export const getProfile = createAsyncThunk(
  "getProfile",
  async ({ userId }, thunkAPI) => {
    let urlUsersProfile =
      "https://social-network.samuraijs.com/api/1.0/profile/" + userId;
    thunkAPI.dispatch(toggleIsFetching(true));
    const response = await axios.get(urlUsersProfile);
    thunkAPI.dispatch(toggleIsFetching(false));
    thunkAPI.dispatch(setProfileData(response.data));
  }
);

export const { addPost, updateNewPostText, setProfileData, toggleIsFetching } =
  profileSlice.actions;

export default profileSlice.reducer;
