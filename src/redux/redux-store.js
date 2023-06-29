import dialogsReducer from "./dialogsReducer";
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
let store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    messagespage: dialogsReducer,
    usersPage: usersReducer,
  },
  middleware: [thunk],
});
export default store;
