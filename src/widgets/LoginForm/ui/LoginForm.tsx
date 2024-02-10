import { FormEventHandler, FormHTMLAttributes, memo, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Input from "../../../shared/ui/Input/Input";
import Button from "../../../shared/ui/Button/Button";
import { loginActions } from "../../../features/loginByEmail/model/slice/loginSlice";
import { loginByEmail } from "../../../features/loginByEmail";
import { getEmailValue } from "../../../features/loginByEmail/model/selectors/getEmailValue/getEmailValue";
import { getErrorValue } from "../../../features/loginByEmail/model/selectors/getErrorValue/getErrorValue";
import { getIsLoadingValue } from "../../../features/loginByEmail/model/selectors/getIsLoadingValue/getIsLoadIngValue";
import { getPasswordValue } from "../../../features/loginByEmail/model/selectors/getPasswordValue/getPasswordValue";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks/hooks";



interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, action } = props,
    dispatch = useAppDispatch(),
    email = useAppSelector(getEmailValue),
    password = useAppSelector(getPasswordValue),
    isLoading = useAppSelector(getIsLoadingValue),
    error = useAppSelector(getErrorValue);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault()
    dispatch(loginByEmail({ email, password }));
  }, [dispatch, password, email]);
  return (
    <form
      className={classNames(cls.LoginForm, {}, [className])}
      onSubmit={onSubmitHandler}
      action={action}
    >
      <h2 className={cls.title}>Sign In</h2>
      <div className={cls.inputWrapper}>
        <Input
          value={email}
          onChange={onChangeEmail}
          className={cls.input}
          type="text"
          placeholder="Enter your email"
        />
        <Input
          value={password}
          onChange={onChangePassword}
          className={cls.input}
          type="password"
          placeholder="Password"
        />
        <span className={cls.descr}>Forgot password?</span>
      </div>
      <Button className={cls.btn}>Login</Button>
    </form>
  );
});

export default LoginForm;
