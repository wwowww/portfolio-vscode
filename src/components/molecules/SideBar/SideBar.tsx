import { SIDE_BAR_MENU, BOTTOM_MENU } from "@/static/mocks/sideBarMenu";
import Icon from "@/components/atoms/Icon/Icon";
import style from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <aside className={style.container}>
      <ul>
        {
          SIDE_BAR_MENU.map((item) => (
            <li key={item.id + "key"}>
              <Icon path={item.path} icon={item.icon} />
            </li>
          ))
        }
      </ul>
      <ul>
        {
          BOTTOM_MENU.map((item) => (
            <li key={item.id + "key"} className="">
              <Icon path={item.path} icon={item.icon} />
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default SideBar;