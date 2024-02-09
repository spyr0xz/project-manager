import { ChangeEvent, FC, FormEventHandler, FormHTMLAttributes, useCallback, useState } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Input from "../../../shared/ui/Input/Input";
import Button from "../../../shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../features/loginByEmail/slice/loginSlice";
import { getEmailValue } from "../../../features/loginByEmail/selectors/getEmailValue/getEmailValue";
import { getPasswordValue } from "../../../features/loginByEmail/selectors/getPasswordValue/getPasswordValue";

interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, action } = props;
  const dispatch = useDispatch()
  const email = useSelector(getEmailValue)
  const password = useSelector(getPasswordValue)

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(`email: ${email} password: ${password}`)
  }
  const onChangeEmail = useCallback((value: string) => {
    dispatch(loginActions.setEmail(value))
  }, [dispatch])
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    //  Реализовать фичу loginByEmail({username, password})
  }, [])
  return (
    
    <form
      className={classNames(cls.LoginForm, {}, [className])}
      onSubmit={onSubmitHandler}
      action={action}
    >
      <h2 className={cls.title}>Sign In</h2>
      <div className={cls.inputWrapper}>
        <Input  value={email} onChange={onChangeEmail} className={cls.input} type="email" placeholder="Enter your email" />
        <Input  value={password} onChange={onChangePassword}  className={cls.input} type="password" placeholder="Password" />
        <span className={cls.descr}>Forgot password?</span>
      </div>
     <Button className={cls.btn}>Login</Button>
    </form>
  );
};

export default LoginForm;
