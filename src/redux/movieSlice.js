import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    list: [],
    details: {},
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {setList, setDetails, setPage, setTotalPages} = movieSlice.actions;

export default movieSlice.reducer;
