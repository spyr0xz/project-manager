import React, { FC, InputHTMLAttributes, memo } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss";
import { ChangeEvent } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const Input: FC<InputProps> = memo((props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const { className, type, onChange, value, placeholder, ...otherProps } =
    props;
  return (
    <input
      className={classNames(cls.input, {}, [className])}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
      type={type}
      {...otherProps}
    />
  );
});

export default Input;
