import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
}

export function Input({ id, name, type, ...props }: InputProps) {
  return <input id={id} name={id} type={type} {...props} />;
}
