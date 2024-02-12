import { getEmailSignupValue } from "./model/selectors/getEmailSignupValue/getEmailSignupValue";
import { getPasswordSignupValue } from "./model/selectors/getPasswordSignupValue/getPasswordSignupValue";
import { getErrorSignupValue } from "./model/selectors/getErrorSignupValue/getErrorSignupValue";
import { getIsLoadingValue } from "./model/selectors/getIsLoadingValue/getIsLoadingValue";
import { getUsernameSignupValue } from "./model/selectors/getUsernameSignupValue/getUsernameSignupValue";
import { SignupByEmailSchema } from "./model/types/SignupByEmailSchema";

import { signupActions, signupReducer } from "./model/slice/SignupSlice";

export type {
  SignupByEmailSchema
}

export {
  getEmailSignupValue,
  getPasswordSignupValue,
  getErrorSignupValue,
  getIsLoadingValue,
  getUsernameSignupValue,
  signupActions,
  signupReducer,
};
