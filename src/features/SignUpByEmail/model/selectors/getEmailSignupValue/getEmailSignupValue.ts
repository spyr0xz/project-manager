import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getEmailSignupValue = (state: StateSchema) => state?.signupForm?.email || '';