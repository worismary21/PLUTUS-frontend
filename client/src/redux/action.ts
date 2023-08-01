import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData } from "../interface";
import { FormDataPost, apiDelete, apiGet, apiPatch, apiPost, apiPut, formDataPatch } from "../utils/axios";
import { fetchBooks, fetchDataFailure, fetchDataPhoto, fetchDataStart, fetchDataSuccess, fetchDataUser, fetchMovies, fetchNotifications } from "./reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const loginUser = createAsyncThunk(
  "loginUser",
  async (formData: LoginData, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/user/login", formData);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("signature", response.data.signature);
      localStorage.setItem("role", response.data.role);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData: LoginData, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPost("/user/signup", formData);
      toast.success(response.data.message);
      localStorage.setItem("signature", response.data.signature);
      localStorage.setItem("role", response.data.role);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
    }
  }
);

export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (token: string, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPatch(`/user/verify/?token=${token}`, {});
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/verified";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
      window.location.href = "/expired";
    }
  }
);

export const resendverification = createAsyncThunk(
  "resendverification",
  async (token: string, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiGet(`/user/resendverification/${token}`);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);


/**==============Get Single Users ======= **/
export const singleUser = createAsyncThunk(
  "singleUser",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiGet("/user/get-singleuser");
      dispatch(fetchDataUser(response.data));
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Get Events ======= **/
export const getEvents = createAsyncThunk(
  "getEvents",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiGet("/event/getEvents");
      dispatch(fetchDataSuccess(response.data));
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Register For Event======= **/

export const registerEvent = createAsyncThunk(
  "registerEvent",
  async ({formData , id}:any, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPatch(`/user/register-event?id=${id}`, formData);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      // window.location.reload()
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

  /**==============Upload Photos=======  **/
export const uploadPhotos = createAsyncThunk(
  "uploadPhotos",
  async (formData:any, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await formDataPatch(`/photographer/upload-photos`, formData);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      window.location.reload()
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Save Photos======= **/
export const saveImages = createAsyncThunk(
  "saveImages",
  async (formData:any, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPut(`/user/save-image`, formData);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

/**==============Delete Photos======= **/
  export const deletePhotos = createAsyncThunk(
    "deletePhotos",
    async ({eventId, url}:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiDelete(`/photographer/delete-photos?eventId=${eventId}&url=${url}`);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  /**==============Delete Photographer======= **/
  export const deletePhotographer = createAsyncThunk(
    "deletePhotographer",
    async (id:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiDelete(`/admin/delete-photographer/${id}`);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );


  /**==============Get Photographers======= **/
  export const getPhotographers = createAsyncThunk(
    "getPhotographers",
    async (_, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiGet(`/photographer/get-photographer`);
        toast.success(response.data.message);
        dispatch(fetchDataPhoto(response.data));
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

    /**==============Get Photographers======= **/
    export const getSinglePhotographer = createAsyncThunk(
      "getSinglePhotographer",
      async (_, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await apiGet(`/photographer/get-singlephotographer`);
          toast.success(response.data.message);
          dispatch(fetchDataPhoto(response.data));
        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

    /**==============Get All Users ========= **/
    export const getUsers= createAsyncThunk(
      "getUsers",
      async (_, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await apiGet(`/user/get-users`);
          toast.success(response.data.message);
          dispatch(fetchDataSuccess(response.data));
        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

  /**==============Get Photographers======= **/
  export const createPhotographer = createAsyncThunk(
    "createPhotographer",
    async (formData :any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiPost(`/admin/create-photographer`, formData);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  /**==============Create Event======= **/
    export const createEvent = createAsyncThunk(
      "createEvent",
      async (formData :any, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await FormDataPost(`/admin/create-event`, formData);
          toast.success(response.data.message);
          dispatch(fetchDataSuccess(response.data));
          window.location.reload()
        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

  /**==============Setup Profile=======  **/
  export const setProfile = createAsyncThunk(
    "updateProfile",
    async (formData:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiPost(`/user/setup`, formData);
        console.log("res", response)
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.href = '/dashboard'
      } catch (error: any) {
        console.log("err", error.response)
        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  /**==============Update Profile=======  **/
  export const updateProfile = createAsyncThunk(
    "updateProfile",
    async (formData:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiPatch(`/user/update`, formData);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

    /**==============Update User Photo=======  **/
    export const updatePhoto = createAsyncThunk(
      "updateProfile",
      async (profilePhoto:any, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await formDataPatch(`/user/update-photo`, profilePhoto);
          toast.success(response.data.message);
          dispatch(fetchDataSuccess(response.data));
          window.location.reload()
        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

  
  /**==============Update Photographers Profile=======  **/
  export const updatePhotoProfile = createAsyncThunk(
    "updateProfile",
    async (formData:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await formDataPatch(`/photographer/update`, formData);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  /**==============Upload Movies======= **/
    export const uploadMovies = createAsyncThunk(
      "uploadMovies",
      async (formData :any, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await FormDataPost(`/admin/upload-movies`, formData);
          toast.success(response.data.message);
          dispatch(fetchDataSuccess(response.data));
        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

   /**==============Upload Books======= **/
   export const uploadBooks = createAsyncThunk(
    "uploadBooks",
    async (formData :any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await FormDataPost(`/admin/upload-books`, formData);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
        window.location.reload()
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  /**==============Get Books ========= **/
      export const getBooks = createAsyncThunk(
        "getBooks",
        async (_, { dispatch }) => {
          try {
            dispatch(fetchDataStart(true));
            const response = await apiGet(`/user/get-books`);
            toast.success(response.data.message);
            dispatch(fetchBooks(response.data));
          } catch (error: any) {
    
            toast.error(error.response.data.message);
            dispatch(fetchDataFailure(error.response.data.message));
          }
        }
      );

  /**==============Get Movies ========= **/
    export const getMovies = createAsyncThunk(
    "getMovies",
    async (_, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiGet(`/user/get-movies`);
        toast.success(response.data.message);
        dispatch(fetchMovies(response.data));
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );


/**============== Notifications ========= **/
    export const notifications = createAsyncThunk(
      "notifications",
      async (_, { dispatch }) => {
        try {
          dispatch(fetchDataStart(true));
          const response = await apiGet(`/user/notifications`);
          toast.success(response.data.message);
          dispatch(fetchNotifications(response.data));

        } catch (error: any) {
  
          toast.error(error.response.data.message);
          dispatch(fetchDataFailure(error.response.data.message));
        }
      }
    );

   /**==============Verify Email======= **/
   export const verifyEmail = createAsyncThunk(
    "verifyEmail",
    async (formData:any, { dispatch }) => {
      try {
        dispatch(fetchDataStart(true));
        const response = await apiPut(`/user/verify-email`, formData);
        toast.success(response.data.message);
        dispatch(fetchDataSuccess(response.data));
      } catch (error: any) {

        toast.error(error.response.data.message);
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );
  

    /**==============User Forgot Password======= **/
export const userForgotPassword = createAsyncThunk(
  "userForgotPassword",
  async ({formData, token}:any, { dispatch }) => {
    try {
      dispatch(fetchDataStart(true));
      const response = await apiPut(`/user/forgot-password?token=${token}`, formData);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/login"
        }, 2000)
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch(fetchDataFailure(error.response.data.message));
    }
  }
);

  /**==============Logout ======= **/
  export const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
