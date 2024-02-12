import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignupByEmailSchema } from "../types/SignupByEmailSchema";



const initialState: SignupByEmailSchema = {
  email: '',
  username: '',
  password: '',
  isLoading: false
}

const SignUpSlice = createSlice({
  name: 'Signup',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    }
  },
  // extraReducers:(builder) => {
  // //  Will put async thunk there
  // }

})

export const {actions: signupActions} = SignUpSlice
export const {reducer: signupReducer} = SignUpSlice;