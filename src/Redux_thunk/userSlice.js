import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4000/users";

const initialState = {
  users: [],
  newUsers: "",
  errMsg: "",
  existUsers: "",
};

export const createUser = createAsyncThunk(
  "notes/createNotes",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(URL, postData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

export const verifyUser = createAsyncThunk(
  "notes/verifyUser",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(URL, postData);
      if (postData === createUser()) {
        return res.data;
      } else {
        console.error("verification failed");
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
  },
  extraReducers: {
    [createUser.pending]: (state, action) => {},
    [createUser.fulfilled]: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    [createUser.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
  },
});

export const { setNewUsers } = userSlice.actions;
export const userReducer = userSlice.reducer;
