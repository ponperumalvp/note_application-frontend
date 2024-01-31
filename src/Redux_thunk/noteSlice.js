import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../localStorage/getItem/getItem";

const URL = "https://ponperumal-note-backend.onrender.com/notes";
const URI = "https://ponperumal-note-backend.onrender.com/bussinessNotes";

const initialState = {
  notes: [],
  bussinessNotes: [],
  search: "",
  errMsg: "",
};

export const createNote = createAsyncThunk(
  "notes/createNotes",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(`${URL}/createNote`, postData, {
        headers: { authorization: getItem("accessToken") },
      });
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
      const userId = await getItem("userId");

      const res = await axios.get(`${URL}/getNote/${userId}`, {
        headers: { authorization: getItem("accessToken") },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

export const deleteNote = createAsyncThunk(
  "personalNote/deletePersonalNote",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${URL}/deleteNote/${id}`, {
        headers: { authorization: getItem("accessToken") },
      });
      return { id: id };
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

export const createBussinessNote = createAsyncThunk(
  "notes/createNotes",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(`${URI}/createBussinessNote`, postData, {
        headers: { authorization: getItem("accessToken") },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);
export const getBussinessNotes = createAsyncThunk(
  "bussinessNotes/getBussinessNotes",

  async (_, thunkAPI) => {
    try {
      const userId = await getItem("userId");

      const res = await axios.get(`${URI}/getBussinessNote/${userId}`, {
        headers: { authorization: getItem("accessToken") },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);
export const deleteBussinessNote = createAsyncThunk(
  "personalNote/deletePersonalNote",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${URI}/deleteBussinessNote/${id}`, {
        headers: { authorization: getItem("accessToken") },
      });
      return { id: id };
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
      console.log(action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [getNotes.pending]: (state, action) => {},
    [getNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      state.errMsg = "";
    },
    [getNotes.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },

    [createNote.pending]: (state, action) => {},
    [createNote.fulfilled]: (state, action) => {
      state.notes = [...state.notes, action.payload];
      console.log(state.notes);
    },
    [createNote.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
    [createBussinessNote.pending]: (state, action) => {},
    [createBussinessNote.fulfilled]: (state, action) => {
      state.bussinessNotes = [...state.bussinessNotes, action.payload];
    },
    [createBussinessNote.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
    [getBussinessNotes.pending]: (state, action) => {},
    [getBussinessNotes.fulfilled]: (state, action) => {
      state.bussinessNotes = action.payload;

      state.errMsg = "";
    },
    [getBussinessNotes.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
    [deleteNote.pending]: (state, action) => {},
    [deleteNote.fulfilled]: (state, action) => {
      state.notes = state.notes.filter((note) => {
        return note.id !== action.payload.id;
      });
    },
    [deleteNote.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
    [deleteBussinessNote.pending]: (state, action) => {},
    [deleteBussinessNote.fulfilled]: (state, action) => {
      state.notes = state.notes.filter((note) => {
        return note.id !== action.payload.id;
      });
    },
    [deleteBussinessNote.rejected]: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
  },
});

export const { setNewNotes, setSearch } = noteSlice.actions;

export const noteReducer = noteSlice.reducer;
