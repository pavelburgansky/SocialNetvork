import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  id: null,
  email: null,
  login: null,
  isLogin: false, // Меняем 1 -> false для логики
  error: null,
};

// ✅ 1. Thunk для авторизации пользователя
export const authentificationUser = createAsyncThunk(
  "auth/authentificationUser",
  async (_, {rejectWithValue}) => {
    try{
      const response = await axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
      if(response.data.resultCode !== 0){
        return rejectWithValue(response.data.messages[0] || "Ошибка авторизации");
      }
      return {email: response.data.data.email, id: response.data.data.id, login: response.data.data.login}
    }
    catch(error){
      return rejectWithValue(error.message || "Ошибка запроса");
    }
  }
)

// ✅ 2. Thunk для логина
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://social-network.samuraijs.com/api/1.0/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (response.data.resultCode !== 0) {
        return rejectWithValue(response.data.messages[0] || "Ошибка авторизации");
      }

      return { email, id: response.data.data.userId, login: email };
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка запроса");
    }
  }
);

// ✅ 3. Thunk для выхода (Logout)
export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://social-network.samuraijs.com/api/1.0/auth/logout",
        {},
        { withCredentials: true }
      );

      if (response.data.resultCode !== 0) {
        return rejectWithValue("Ошибка при выходе");
      }

      return true; // Просто возвращаем успех
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка запроса");
    }
  }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      // authentificationUser
      .addCase(
        authentificationUser.pending,
        (state) => {
          state.error = null;
        }
      )
      .addCase(
        authentificationUser.fulfilled,
        (state, action) => {
          state.id = action.payload.id;
          state.email = action.payload.email;
          state.login = action.payload.login;
          state.isLogin = true;
        }

      )
      .addCase(
        authentificationUser.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLogin = false;
        }
      )

      // Обрабатываем loginUser
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.login = action.payload.login;
        state.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLogin = false;
      })

      // Обрабатываем logoutUser
      .addCase(logout.fulfilled, (state) => {
        state.id = null;
        state.email = null;
        state.login = null;
        state.isLogin = false;
      });
  },
});

export default authSlice.reducer;
