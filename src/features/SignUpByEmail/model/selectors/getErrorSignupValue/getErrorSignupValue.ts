import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getErrorSignupValue = (state: StateSchema) => state?.signupForm?.error || ''