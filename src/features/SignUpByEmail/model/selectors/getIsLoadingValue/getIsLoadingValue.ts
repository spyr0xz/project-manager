import { StateSchema } from "../../../../../app/providers/storeProvider/config/StateSchema";

export const getIsLoadingValue = (state:StateSchema) => state?.signupForm?.isLoading || false;