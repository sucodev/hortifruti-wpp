import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  hasIcon?: ReactNode;
}

export function Input({ id, name, type, hasIcon, ...props }: InputProps) {
  return (
    <div>
      <input
        className={styles.inputContainer}
        id={id}
        name={id}
        type={type}
        {...props}
      />
      {hasIcon && hasIcon}
    </div>
  );
}
