import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../entities/User";
import axios from "axios";

interface SignupByEmailProps {
  email: string,
  password: string,
  username: string;
}

export const SignupByEmail = createAsyncThunk<User, SignupByEmailProps, {rejectValue: string}>(
  'Signup/signupByEmail',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/signup', authData)
      if(!response.data) {
        throw new Error()
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong')
    }
  }
);