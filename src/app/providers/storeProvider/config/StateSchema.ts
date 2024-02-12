import { UserSchema } from "../../../../entities/User";
import { SignupByEmailSchema } from "../../../../features/SignUpByEmail";
import { LoginByEmailSchema } from "../../../../features/loginByEmail";

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginByEmailSchema;
  signupForm?: SignupByEmailSchema;
}