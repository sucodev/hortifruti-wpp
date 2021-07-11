import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
}

export function Input({ id, name, type, ...props }: InputProps) {
  return (
    <input
      className={styles.inputContainer}
      id={id}
      name={id}
      type={type}
      {...props}
    />
  );
}
