import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "../../lib/classNames/classNames";
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string,
children?: string
}

const Button: FC<ButtonProps> = (props) => {
  const {className, children, type} = props;
  
  return (
    <button type={type} className={classNames(cls.Button, {}, [className])}>
      {children}
    </button>
  )
}
export default Button