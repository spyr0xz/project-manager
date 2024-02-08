import { FC, FormHTMLAttributes } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Input from "../../../shared/ui/Input/Input";
import Button from "../../../shared/ui/Button/Button";

interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, action } = props;
  return (
    
    <form
      className={classNames(cls.LoginForm, {}, [className])}
      action={action}
    >
      <h2 className={cls.title}>Sign In</h2>
      <div className={cls.inputWrapper}>
        <Input className={cls.input} type="email" placeholder="Enter your email" />
        <Input className={cls.input} type="password" placeholder="Password" />
        <span className={cls.descr}>Forgot password?</span>
      </div>
     <Button className={cls.btn}>Login</Button>
    </form>
  );
};

export default LoginForm;
