import { UserSchema } from "../../../../entities/User";
import { LoginByEmailSchema } from "../../../../features/loginByEmail";

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginByEmailSchema;
}