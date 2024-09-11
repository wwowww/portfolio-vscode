import { useLocation, useNavigate } from "react-router-dom";
import style from "./Icon.module.scss";

type IconProps = {
  path: string;
  icon: any;
}

const Icon = ({path, icon}: IconProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <button onClick={() => navigate(path)} className={style.wrap}>
      <img src={icon} alt="svg icon." className={pathname === path ? `${style.white}` : ""} />
    </button>
  )
}

export default Icon;