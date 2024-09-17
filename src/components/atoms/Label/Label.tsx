import { ReactNode } from "react"
import style from "./Label.module.scss"

type LabelProps = {
  children: ReactNode;
  blockStyle?: 'block' | 'inline';
}

const Label = ({ children, blockStyle='block' }: LabelProps) => {
  return (
    <label className={style.label} style={{"display": blockStyle}}>
      {children}
    </label>
  )
}

export default Label;