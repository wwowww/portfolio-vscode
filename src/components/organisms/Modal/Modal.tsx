import { ReactNode } from "react";
import Typography from "@/components/atoms/Typography/Typography";
import Button from "@/components/atoms/Button/Button";
import style from "./Modal.module.scss";

type ModalProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  dim?: boolean;
  closeButton?: boolean;
  onClick?: () => void;
}

const Modal = ({ children, title, description, dim = true, closeButton = true, onClick }: ModalProps) => {
  return (
    <div className={`${style.wrap} ${dim ? style.dim : ""}`}>
      <div className={style.dim} onClick={onClick}></div>
      <div className={style.content}>
        {closeButton && <Button onClick={() => onClick} className={style.closeButton}><img src="src/assets/icons/CloseIcon.svg" alt="닫기" /></Button>}
        {title && <Typography Tag="h4" className="body-18-150-400">{title}</Typography>}
        {description && <p className={style.description}>{description}</p>}
        {children}
      </div>
    </div>
  )
}

export default Modal;