import { useState } from "react";
import LoginForm from "../../../widgets/LoginForm/ui/LoginForm";
import { SignUpForm } from "../../../widgets/SignUpForm";
import cls from "./AuthPage.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useAppSelector } from "../../../shared/lib/hooks/hooks";
import { getUserAuthData } from "../../../entities/User/model/selector/getUserAuthData/getUserAuthData";
import { Navigate } from "react-router-dom";
import { routePath } from "../../../shared/config/routeConfig/routeConfig";

interface LoginPageProps {
  className?: string;
}

const LoginPage = (props: LoginPageProps) => {
  const [isSigned, setIsSigned] = useState<Boolean>(true);

  const onSignHandler = () => {
    setIsSigned((prev) => !prev);
  };

  const authData = useAppSelector(getUserAuthData);

  if (authData) {
    return <Navigate to={routePath.main} />;
  }

  const { className } = props;
  return (
    <div className={classNames(cls.LoginPage, {}, [className])}>
      <div className={cls.logo}>Project&nbsp;Manager</div>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.text}>
            <h2 className={cls.title}>
              {isSigned ? "Sign in to" : "Sign up to"}
            </h2>
            <p className={cls.title_descr}>Project M. by spyr0xz</p>

            <p className={cls.descr}>
              If you dont have an account register You can{" "}
              <span onClick={onSignHandler}>
                {isSigned ? "Register here" : "Login here"}
              </span>
            </p>
          </div>
          {isSigned ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
