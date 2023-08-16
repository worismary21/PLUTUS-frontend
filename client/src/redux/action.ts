/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiDelete,
  apiGet,
  apiPatch,
  apiPost,
  apiPut,
  formDataPatch,
} from "../utils/axios";
import {
  fetchDataCompany,
  fetchDataFailure,
  fetchDataStart,
  fetchDataUser,
  fetchDataBeneficiary,
} from "./reducers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "loginUser",
  async (formData: LoginData, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));

      //axios call
      const response = await apiPost("/user/login", formData);
      console.log(response);

      //response check
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("email", response.data.email);
      toast.success("user login successful");

      //redirect
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error: any) {
      //error check
      toast.error("error loggin In");
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData: LoginData, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/user/signup", formData);
      console.log("resp", response);
      localStorage.setItem("token", response.data.token);
      dispatch(fetchDataUser(response.data));
      //  localStorage.setItem("role", response.data.role);
      setTimeout(() => {
        window.location.href = "/verify";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**============== Transfer Money =======  **/

export const transferFunds = createAsyncThunk(
  "transferFunds",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/transfer/transactions", formData);
      console.log("resp", response);
      toast.success("transfer successful");

      //redirect
      setTimeout(() => {
        window.location.href = "/dashboard/transfer";
      }, 2000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**============== Transfer Money to Savings Wallet=======  **/
export const savingswallet = createAsyncThunk(
  "saveImages",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPut(`/transfer/savings`, formData);
      toast.success(response.data.message);

      //redirect
      setTimeout(() => {
        window.location.href = "/dashboard/transfer/savings";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**============== Transfer Money to Investment Company =======  **/

export const transferInvestment = createAsyncThunk(
  "transferInvestment",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/transfer/investment", formData);
      console.log("resp", response);
      toast.success("transfer successful");

      //redirect
      setTimeout(() => {
        window.location.href = "/dashboard/transfer/investment";
      }, 2000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**============== Get User Info =======  **/

export const getInfo = createAsyncThunk(
  "getInfo",
  async (_, { dispatch }: any) => {
    try {
      //set loader true
      dispatch(fetchDataStart(true));

      //axios call
      const response = await apiGet("/user/info");
      console.log(response.data);

      dispatch(fetchDataUser(response.data.data));
    } catch (error: any) {
      console.log(error);
    }
  }
);

/**============== Get Beneficiary Info =======  **/

export const getBeneficiary = createAsyncThunk(
  "getInfo",
  async (_, { dispatch }: any) => {
    try {
      //set loader true
      dispatch(fetchDataStart(true));

      //axios call
      const response = await apiGet("/beneficiary/get");
      console.log(response.data);

      dispatch(fetchDataBeneficiary(response.data));
    } catch (error: any) {
      console.log(error);
    }
  }
);

/**============== Create Beneficiary  =======  **/

export const createBeneficiary = createAsyncThunk(
  "createBeneficiary",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/beneficiary/create", formData);
      console.log("resp", response);
      toast.success("Beneficiary created successfully");

      //redirect
      setTimeout(() => {
        window.location.href = "/dashboard/transfer/addbeneficiary";
      }, 2000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (otp: string, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      await apiPatch(`/user/verify`, { otp });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
      window.location.href = "/expired";
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (token: string, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiGet(`/user/changePassword/${token}`);
      toast.success(response.data.message);
      // setTimeout(() => {
      //   window.location.href = "/confirm";
      // }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Upload Photos=======  **/
export const uploadPhotos = createAsyncThunk(
  "uploadPhotos",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await formDataPatch(
        `/photographer/upload-photos`,
        formData
      );
      toast.success(response.data.message);
      window.location.reload();
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Save Photos======= **/
export const saveImages = createAsyncThunk(
  "saveImages",
  async (formData: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPut(`/user/save-image`, formData);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Delete Photos======= **/
export const deletePhotos = createAsyncThunk(
  "deletePhotos",
  async ({ eventId, url }: any, { dispatch }: any) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiDelete(
        `/photographer/delete-photos?eventId=${eventId}&url=${url}`
      );
      toast.success(response.data.message);
      window.location.reload();
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

export const getCompanies = createAsyncThunk(
  "getCompanies",
  async (_, { dispatch }: any) => {
    try {
      //set loader true
      dispatch(fetchDataStart(true));

      //axios call
      const response = await apiGet("/company/get-companies");
      console.log(response.data);

      dispatch(fetchDataCompany(response.data.company));
    } catch (error: any) {
      console.log(error);
    }
  }
);
