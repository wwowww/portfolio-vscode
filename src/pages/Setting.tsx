import Typography from '@/components/atoms/Typography/Typography';
import { THEME_LIST } from "@/mocks/themeList";
import style from "@/assets/styles/Setting.module.scss";
import { useState, useEffect } from 'react';

const Setting = () => {
  const localTheme = localStorage.getItem("theme");
  const [themeName, setThemeName] = useState<string>(localTheme.toString());
  const [cssEffect, setCssEffect] = useState<boolean>(false);
  
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setThemeName(theme)
  };

  return (
    <>
      <Typography Tag="h2" className='body-24-140-600'> 
        <img src="/src/assets/icons/SettingIcon.svg" alt="" className={style.cogwheel} />
        Setting Color Themes
      </Typography>
      <ul className={style.listWrap}>
        {THEME_LIST.map((item) => (
          <li key={item.id + "key"} className={style.list}>
            <img src={`src/assets/images/${item.img}`} alt="" />
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