import style from "./Input.module.scss";

type InputProps = {
  type: "text" | "number" | "email" | "checkbox" | "submit";
  value?: any;
  placeholder?: string;
  name?: string; 
  id?: string;
  onChange?: any;
  onClick?: () => void;
  required?: boolean;
};

const Input = ({ type, value, name, placeholder, id, onChange, onClick, required=false }: InputProps) => {
  return (
    <input 
      type={type}
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      className={style.input}
      required={required}
    />
  )
}

export default Input;