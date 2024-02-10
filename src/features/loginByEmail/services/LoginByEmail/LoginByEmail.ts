import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "../../../../shared/constants/localStorage";
import axios from "axios";
import { User, UserSchema, userActions } from "../../../../entities/User";

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string; }>(
  'login/loginByEmail',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new Error()
      }
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('wrong password')
    }
  }
);