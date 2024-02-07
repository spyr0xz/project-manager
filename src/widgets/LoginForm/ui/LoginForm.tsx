import { FC, FormHTMLAttributes } from 'react'
import cls from './LoginForm.module.scss'
import { classNames } from '../../../shared/lib/classNames/classNames';
import Input from '../../../shared/ui/Input/Input';


interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const {className, action} = props;
  return (
    <form className={classNames(cls.LoginForm, {}, [className])} action={action}>
      <Input placeholder='username' />
    </form>
  )
}

export default LoginForm