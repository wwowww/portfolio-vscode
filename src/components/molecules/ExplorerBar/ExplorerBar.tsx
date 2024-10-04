import { EXPLORER_BAR_MENU } from "@/static/mocks/explorerBarMenu";
import Tab from "@/components/atoms/Tab/Tab";
import style from "./ExplorerBar.module.scss";
import { useState } from "react";
import ArrowToggleButton from "@/components/atoms/ToggleButton/ArrowToggleButton/ArrowToggleButton";

const ExplorerBar = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <section className={style.wrap}>
      <h2 className={style.title}>Explorer</h2>
      <ArrowToggleButton
        toggle={toggle}
        onClick={() => setToggle(!toggle)}
      >
        EUNJEE-PORTFOLIO
      </ArrowToggleButton>
      <ul className={toggle ? style.accordion : ""}>
        {EXPLORER_BAR_MENU.map((item) => (
          <Tab icon={item.icon} path={item.path} title={item.title} key={item.id + "key"} />
        ))}
      </ul>
    </section>
    
  )
}

export default ExplorerBar;