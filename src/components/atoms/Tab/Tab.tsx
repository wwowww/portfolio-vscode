import { useNavigate, useLocation } from 'react-router-dom';
import style from "./Tab.module.scss";

type TabProps = {
  path: string;
  title: string;
  icon: any;
}

const Tab = ({path, title, icon}: TabProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <li 
      className={`${style.tab} ${pathname === path ? style.active : ""}`} 
      onClick={() => {
        navigate(path);
      }}
    >
      <div className={style.icon}>
        <img src={icon} alt="svg icon." />
      </div>
      <p>{title}</p>
    </li>
  )
}

export default Tab;