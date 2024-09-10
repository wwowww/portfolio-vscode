import { ReactNode } from "react";
import style from "./HomeButton.module.scss";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  type: "background" | "border";
}

const HomeButton = ({onClick, type="background", children}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    className={`${style.button} ${type === "background" ? style.background : style.border}`}
  >
    {children}
  </button>
  )
  
}

export default HomeButton;