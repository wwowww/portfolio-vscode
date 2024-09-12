import { ReactNode } from "react";
import style from "./CodeBlock.module.scss";

type Props = {
  children: ReactNode;
}

const CodeBlock = ({children}: Props) => {
  return (
    <div className={style.wrap}>
      {children}
    </div>
  )
}

export default CodeBlock;