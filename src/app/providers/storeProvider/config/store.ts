import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { loginReducer } from "../../../../features/loginByEmail"
import { userReducer } from "../../../../entities/User"


const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  loginForm: loginReducer,
}

export const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
