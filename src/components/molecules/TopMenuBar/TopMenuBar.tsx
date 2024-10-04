import VscodeIcon from '@/static/icons/VscodeIcon';
import { TOP_MENU_LIST } from '@/static/mocks/topMenuList';
import Typography from '@/components/atoms/Typography/Typography';
import Circle from '@/components/atoms/Circle/Circle';
import style from "./TopMenuBar.module.scss";

const TopMenuBar = () => {
  return (
    <header className={style.container}>
      <div className={style.menu}>
        <VscodeIcon className={style.vscodeIcon} fill={'#2196f3'} />
        <ul className={style.listWrap}>
          {TOP_MENU_LIST.map((item) => (
            <li key={item.id + "key"}>{item.title}</li>
          ))}
        </ul>
      </div>
      <Typography Tag="h1" className="title-14-140-400">Eunjee - Visual Studio Code</Typography>
      <div className={style.circleWrap}>
        <Circle color="#EC6A5E" />
        <Circle color="#F4BE4F" />
        <Circle color="#61C555" />
      </div>
    </header>
  )
}

export default TopMenuBar;