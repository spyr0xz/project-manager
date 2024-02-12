import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getPasswordSignupValue = (state:StateSchema) => state?.signupForm?.password || ''