import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4000/notes";

const initialState = {
  notes: [],
  newNotes: "",

  errMsg: "",
};

export const createNote = createAsyncThunk(
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

export const getNotes = createAsyncThunk(
  "notes/getNotes",

  async (_, thunkAPI) => {
    try {
      const res = await axios.get(URL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNewNotes: (state, action) => {
      state.newNotes = action.payload;
    },
  },
  extraReducers: {
    [getNotes.pending]: (state, action) => {},
    [getNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      state.newNotes = "";
      state.errMsg = "";
    },
    [getNotes.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },

    [createNote.pending]: (state, action) => {},
    [createNote.fulfilled]: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    [createNote.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
  },
});

export const { setNewNotes } = noteSlice.actions;

export const noteReducer = noteSlice.reducer;
