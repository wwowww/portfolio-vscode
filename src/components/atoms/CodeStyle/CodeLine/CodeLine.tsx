import { ReactNode } from "react";
import style from "./CodeLine.module.scss";

type Props = {
  htmlTag?: string;
  tagClose?: boolean;
  attribute?: string;
  attributeContent?: string;
  className?: string;
  bracket?: 'open' | 'close';
  angleBracket?: 'open' | 'close';
  children?: ReactNode;
  indent?: number;
}

const CodeLine = ({htmlTag, tagClose, attribute, attributeContent, className, bracket, angleBracket, children, indent}: Props) => {
  return (
    <div className={style.wrap}>
      {className && <span className={`${style.normal} ${style[className]}`} key={className}>.{className}</span>}
      {htmlTag && 
        <span className={`${style.htmlTag} ${style[`indent-`+indent]}`}>
          {tagClose && <span className={style.tagClose}>/</span>}
          {htmlTag}
          {
            attribute && 
              <span className={style.attribute}>{' '}{attribute}
                <span className={style.equalSign}>=</span>
                <span className={style.content}>"{attributeContent}"</span>
              </span>
          }
        </span>
      }
      {bracket === "open"  && " {"}
      {angleBracket === "open" && "<"}
      {angleBracket === "close" && ">"}
      {children && <span className={style[`indent-`+indent]}>{children}</span>}
      {bracket === "close"  && "}"}
    </div>
  )
}

export default CodeLine;