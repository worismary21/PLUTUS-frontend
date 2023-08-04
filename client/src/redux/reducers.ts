/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  data:any[];
  user: any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  user: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchDataStart: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = null;
    },
    fetchDataUser: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action)
      state.user = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart,  fetchDataUser,  fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
