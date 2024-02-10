import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "../../../../shared/constants/localStorage";

interface LoginByEmailProps {
  username: string,
  password: string
}

export const LoginByEmail = createAsyncThunk(
  "login/loginByEmail",
  async (authData, thunkAPI) => {
    try {
      const response = undefined;
      
      if(!response.data) {
        throw new Error()
      }


     

      return response.data;
    } catch (e) {
      
    }
  }
)