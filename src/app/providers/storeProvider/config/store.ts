import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { loginReducer } from "../../../../features/loginByEmail/slice/loginSlice"


export const createReduxStore = (initialState: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      login: loginReducer,
    },
    preloadedState: initialState
  })
}