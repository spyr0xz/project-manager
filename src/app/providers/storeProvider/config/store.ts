import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { loginReducer } from "../../../../features/loginByEmail"
import { userReducer } from "../../../../entities/User/model/slice/userSlice"


export const createReduxStore = (initialState: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      login: loginReducer,
      user: userReducer
    },
    preloadedState: initialState
  })
}