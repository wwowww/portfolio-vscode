import VscodeIcon from '@/assets/icons/VscodeIcon';
import { TOP_MENU_LIST } from '@/mocks/topMenuList';
import style from "./TopMenuBar.module.scss";
import Circle from '@/components/atoms/Circle/Circle';

const TopMenuBar = () => {
  return (
    <div className={style.container}>
      <div className={style.rightMenu}>
        <VscodeIcon className={style.vscodeIcon} fill={'#2196f3'} />
        <ul className={style.listWrap}>
          {TOP_MENU_LIST.map((item) => (
            <li key={item.id + "key"}>{item.title}</li>
          ))}
        </ul>
      </div>
      <p>Eunjee - Visual Studio Code</p>
      <div className={style.circleWrap}>
        <Circle color="#EC6A5E" />
        <Circle color="#F4BE4F" />
        <Circle color="#61C555" />
      </div>
    </div>
  )
}

export default TopMenuBar;