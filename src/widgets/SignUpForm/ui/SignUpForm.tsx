import { FormEventHandler, FormHTMLAttributes, memo, useCallback } from "react";
import Input from "../../../shared/ui/Input/Input";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./SignUpForm.module.scss";
import Button from "../../../shared/ui/Button/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/lib/hooks/hooks";
import { getEmailSignupValue, getErrorSignupValue, getIsLoadingValue, getPasswordSignupValue, getUsernameSignupValue, signupActions } from "../../../features/SignUpByEmail";
import { SignupByEmail } from "../../../features/SignUpByEmail/model/services/SignupByEmail";

interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const SignUpForm = (props: SignUpFormProps) => {
  // Constants
  const { className, action } = props,
    dispatch = useAppDispatch(),
    email = useAppSelector(getEmailSignupValue),
    username = useAppSelector(getUsernameSignupValue),
    password = useAppSelector(getPasswordSignupValue),
    isLoading = useAppSelector(getEmailSignupValue),
    errorMessage = useAppSelector(getErrorSignupValue),
    onChangeEmail = useCallback((value: string) => {
    dispatch(signupActions.setEmail(value));
  }, [dispatch]),
    onChangePassword = useCallback((value: string) => {
      dispatch(signupActions.setPassword(value))
    }, [dispatch]),
    onChangeUsername = useCallback((value: string) => {
      dispatch(signupActions.setUsername(value))
    }, [dispatch]),
    onSubmitHandler: FormEventHandler<HTMLFormElement> = useCallback((e) => {
      e.preventDefault()
      dispatch(SignupByEmail({username, email, password}))
    }, [dispatch,email, password, username])

    // Validation

  return (
    <form
      onSubmit={onSubmitHandler}
      className={classNames(cls.SignupFrom, {}, [className])}
      action={action}
    >
      <h2 className={cls.title}>Sign Up</h2>
      <div className={cls.inputWrapper}>
        <Input value={email} onChange={onChangeEmail} type="email" placeholder="Enter email" />
        <Input value={username} onChange={onChangeUsername} placeholder="Create username" />
        <Input value={password} onChange={onChangePassword} type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim password" />
      </div>
      <Button className={cls.btn}>Sign Up</Button>
    </form>
  );
};
export default memo(SignUpForm);
