import { ReactNode } from "react";
import style from "./CodeLine.module.scss";

type Props = {
  tag?: string;
  bracket?: 'open' | 'close';
  children?: ReactNode;
  indent?: number;
}

const CodeLine = ({tag, bracket, children, indent}: Props) => {
  return (
    <div className={style.wrap}>
      {tag && <span className={`${style.normal} ${style[tag]}`} key={tag}>.{tag}</span>}
      {bracket === "open"  && " {"}
      {children && <span className={style[`indent-`+indent]}>{children}</span>}
      {bracket === "close"  && "}"}
    </div>
  )
}

export default CodeLine;