import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getEmailValue = (state: StateSchema) => state?.loginForm?.email || '';