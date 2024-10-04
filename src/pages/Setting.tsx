import { THEME_LIST } from "@/static/mocks/themeList";
import style from "@/assets/styles/Setting.module.scss";
import { useState } from 'react';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import sectionImage from "@/static/icons/SettingIcon.svg";

const Setting = () => {
  const localTheme = localStorage.getItem("theme") as string;
  const [themeName, setThemeName] = useState<string>(localTheme);
  
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setThemeName(theme)
  };

  return (
    <>
      <SectionTitle
        imageSrc={sectionImage}
        title="Setting Color Themes"
        className="cogwheel"
      />
      <ul className={style.listWrap}>
        {THEME_LIST.map((item) => (
          <li key={item.id + "key"} className={style.list}>
            <img src={`@/static/images/${item.img}`} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
              className={(themeName === item.theme ) ? `${style.active}` : ""}
              onClick={() => setTheme(item.theme)}
            >
              Set Theme
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Setting;