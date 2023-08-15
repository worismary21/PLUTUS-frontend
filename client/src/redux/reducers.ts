/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  user: any[];
  company: any[];
  transactions: any[];
  transfer:any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: [],
  company: [],
  transactions:[],
  transfer:[],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchDataStart: (state, _action: PayloadAction<boolean>) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataUser: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action)
      state.user = action.payload;
    },
    fetchDataCompany: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action)
      state.company = action.payload;
    },

 
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart,  fetchDataUser,  fetchDataFailure, fetchDataCompany} = dataSlice.actions;

export default dataSlice.reducer;
