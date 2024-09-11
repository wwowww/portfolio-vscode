import { ReactNode } from "react";
import style from "./ArrowToggleButton.module.scss";

type ButtonProps = {
  toggle: boolean;
  onClick: () => void;
  children: ReactNode | string;
}

const ArrowToggleButton = ({toggle, onClick, children}: ButtonProps) => {
  return (
    <button 
      className={`${style.toggleButton} ${toggle ? style.active : ""}`}
        onClick={onClick}
      >
      {children}
    </button>
  )
}

export default ArrowToggleButton;