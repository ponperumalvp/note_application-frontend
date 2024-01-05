import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setItem } from "../localStorage/seItem/setItem";
const URL = "http://localhost:4000/users";

const initialState = {
  users: [],
  newUsers: "",
  errMsg: "",
  existUsers: "",
  isLogin: false,
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async (postData, thunkAPI) => {
    try {
      console.log(postData);
      const res = await axios.post(`${URL}/register`, postData);
      console.log(res.data.message);
      if (res.data.message === "register successful") {
        await setItem("userId", res.data.userId);
        await setItem("accessToken", res.data.token);
        toast.success(res.data.message);
        return "verifyed";
      } else {
        return "verification failed";
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

export const verifyUser = createAsyncThunk(
  "users/verifyUser",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(`${URL}/login`, postData);

      if (res.data.message === "login successful") {
        await setItem("userId", res.data.userId);
        await setItem("accessToken", res.data.token);
        toast.success(res.data.message);
        return "verifyed";
      } else {
        return "verification failed";
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setNewUsers: (state, action) => {
      state.newUsers = action.payload;
    },
    setExistUsers: (state, action) => {
      state.existUsers = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  // extraReducers: {
  //   [createUser.pending]: (state, action) => {},
  //   [createUser.fulfilled]: (state, action) => {
  //     state.users = [...state.users, action.payload];
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.errMsg = action.payload.errMsg;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {})
      .addCase(createUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
      })
      .addCase(createUser.rejected, (state, action) => {
        state.errMsg = action.payload.errMsg;
      });
  },
});

export const { setNewUsers, setExistUsers, setIsLogin } = userSlice.actions;
export const userReducer = userSlice.reducer;
