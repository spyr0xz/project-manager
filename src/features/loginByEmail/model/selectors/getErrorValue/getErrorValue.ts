import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getErrorValue = (state: StateSchema) => state?.loginForm?.error;