import { ReactNode } from "react";
import style from "./Textarea.module.scss";

type TextareaProps = {
  children?: ReactNode;
  value: string;
  name?: string; 
  onChange?: any;
  required?: boolean; 
}

const Textarea = ({children, value, name, onChange, required=false}: TextareaProps) => {
  return (
    <textarea className={style.textarea} value={value} name={name} onChange={onChange} required={required}>
      {children}
    </textarea>
  )
}

export default Textarea;