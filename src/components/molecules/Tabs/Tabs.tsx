import { useLocation } from "react-router-dom";
import Tab from "@/components/atoms/Tab/Tab";
import { TAB_LIST } from "@/mocks/tabList";
import style from "./Tabs.module.scss";


const Tabs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <ul className={style.tabs} style={pathname === '/code-examples' ? {display: 'none'} : {}}>
      {TAB_LIST.map((item) => (
        <Tab icon={item.icon} path={item.path} title={item.title} key={item.id + "key"} />
      ))}
    </ul>
  )
}

export default Tabs;