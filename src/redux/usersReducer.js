import { createAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../components/api/apiUsers/getUsers";
import { followUser } from "../components/api/apiUsers/followUser";
import { unfollowUser } from "../components/api/apiUsers/unfollowUser";
const initialState = {
  usersData: [],
  totalUsersCount: 0,
  pagesize: 5,
  currentPage: 1,
  followingInProgress: [],
  isFetching: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow: (state, action) => {
      state.usersData = state.usersData.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: true };
        }
        return u;
      });
    },
    unfollow: (state, action) => {
      state.usersData = state.usersData.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: false };
        }
        return u;
      });
    },
    setUsers: (state, action) => {
      state.usersData = [...action.payload];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleFollowingInProgress: (state, action) => {
      if (action.payload.isFollowing) {
        state.followingInProgress.push(action.payload.userId);
      } else {
        state.followingInProgress = state.followingInProgress.filter(
          (id) => id !== action.payload.userId
        );
      }
    },
    setTotalCount: (state, action) => {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleFollowingInProgress,
  setTotalCount,
  toggleIsFetching,
} = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ currentPage, pagesize }, thunkAPI) => {
    thunkAPI.dispatch(setCurrentPage(currentPage));
    thunkAPI.dispatch(toggleIsFetching(true));
    const response = await getUsers(currentPage, pagesize);
    thunkAPI.dispatch(toggleIsFetching(false));
    thunkAPI.dispatch(setUsers(response.items));
    thunkAPI.dispatch(setTotalCount(response.totalCount));
  }
);
export const unfollowSuccess = createAsyncThunk(
  "unfollowUser",
  async ({ userId }, thunkAPI) => {
    thunkAPI.dispatch(toggleFollowingInProgress({ isFollowing: true, userId }));
    const response = await unfollowUser(userId);
    if (response.resultCode === 0) {
      thunkAPI.dispatch(unfollow(userId));
    }
    thunkAPI.dispatch(
      toggleFollowingInProgress({ isFollowing: false, userId })
    );
  }
);
export const followSuccess = createAsyncThunk(
  "followUser",
  async ({ userId }, thunkAPI) => {
    thunkAPI.dispatch(toggleFollowingInProgress({ isFollowing: true, userId }));
    const response = await followUser(userId);
    if (response.resultCode === 0) {
      thunkAPI.dispatch(follow(userId));
    }
    thunkAPI.dispatch(
      toggleFollowingInProgress({ isFollowing: false, userId })
    );
  }
);
// const usersReducer = (state = inicialState, action) => {
//   switch (action.type) {
//     case "FOLLOW":
//       return {
//         ...state,
//         usersData: state.usersData.map((u) => {
//           if (u.id === action.payload) {
//             return { ...u, followed: true };
//           }
//           return u;
//         }),
//       };
//     case "UNFOLLOW":
//       return {
//         ...state,
//         usersData: state.usersData.map((u) => {
//           if (u.id === action.payload) {
//             return { ...u, followed: false };
//           }
//           return u;
//         }),
//       };
//     case "SET-USERS":
//       return {
//         ...state,
//         usersData: [...action.payload],
//       };
//     case "SET_CURRENT_PAGE":
//       return {
//         ...state,
//         currentPage: action.payload,
//       };
//     case "TOGGLE_IS_FOLLOWING_IN_PROGRESS":
//       return {
//         ...state,
//         followingInProgress: action.payload.isFollowing
//           ? [...state.followingInProgress, action.payload.userId]
//           : state.followingInProgress.filter(
//               (id) => id !== action.payload.userId
//             ),
//       };
//     case "SET_TOTAL_COUNT":
//       return {
//         ...state,
//         totalUsersCount: action.payload,
//       };
//     case "TOGGLE_IS_FETCHING":
//       return {
//         ...state,
//         isFetching: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const followActionCreator = createAction("FOLLOW");
// export const unfollowActionCreator = createAction("UNFOLLOW");
// export const setUsersActionCreator = createAction("SET-USERS");
// export const setCurrentPageActionCreator = createAction("SET_CURRENT_PAGE");
// export const setTotalUsersCountActionCreator = createAction("SET_TOTAL_COUNT");
// export const toggleIsFollowingActionCreator = createAction(
//   "TOGGLE_IS_FOLLOWING_IN_PROGRESS"
// );
// export const setIsFetchingActionCreator = createAction("TOGGLE_IS_FETCHING");

// export const fetchUsers = createAsyncThunk(
//   'users/fetchUsers',
//   async ({ pageNumber, pageSize }) => {
//     dispatch(toggleIsFetching(true));
//     const response = await axios.get(
//       `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
//       { withCredentials: true }
//     );
//     dispatch(toggleIsFetching(false));
//     return response.data.items;
//   }
// );

// export const followActionCreator = (userId) => {
//
//   return {
//     type: "FOLLOW",
//     payload: userId,
//   };
// };
// export const unfollowActionCreator = (userId) => {
//   return {
//     type: "UNFOLLOW",
//     userId,
//   };
// };
// export const setUsersActionCreator = (users) => {
//   return {
//     type: "SET-USERS",
//     users,
//   };
// };

//export default usersReducer;
