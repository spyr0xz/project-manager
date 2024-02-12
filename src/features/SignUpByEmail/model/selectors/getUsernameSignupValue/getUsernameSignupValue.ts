import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getUsernameSignupValue= (state: StateSchema) => state?.signupForm?.username || '';