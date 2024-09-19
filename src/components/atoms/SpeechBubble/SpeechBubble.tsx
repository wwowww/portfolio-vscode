import { ReactNode } from "react";
import style from "./SpeechBubble.module.scss";

type Props = {
  children: ReactNode;
}

const SpeechBubble = ({children}: Props) => {
  return (
    <div className={style.wrap}>
      {children}
    </div>
  )
}

export default SpeechBubble;