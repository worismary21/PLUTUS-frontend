/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useDispatch  } from 'react-redux';

export interface State {
  user: any[];
  company: any[];
  transactions: any[];
  transfer: any[];
  investor: any[];
  beneficiary: any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: [],
  company: [],
  transactions: [],
  investor: [],
  transfer: [],
  beneficiary: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchDataStart: (state, _action: PayloadAction<boolean>) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataUser: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action);
      state.user = action.payload;
    },
    fetchDataCompany: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action);
      state.company = action.payload;
    },
    fetchDataBeneficiary: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action);
      state.beneficiary = action.payload;
    },
    fetchDataInvestor: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      console.log(action);
      state.investor = action.payload;
    },

    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataUser,
  fetchDataFailure,
  fetchDataCompany,
  fetchDataBeneficiary,
  fetchDataInvestor,
} = dataSlice.actions;

export default dataSlice.reducer;
