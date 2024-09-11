import SourceControlIcon from "@/assets/icons/SourceControlIcon.svg";
import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
import WarningIcon from "@/assets/icons/WarningIcon.svg";
import ReactIcon from "@/assets/icons/ReactIcon.svg";
import CheckIcon from "@/assets/icons/CheckIcon.svg";
import BellIcon from "@/assets/icons/BellIcon.svg";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <ul>
          <li>
            <a href="https://github.com/wwowww" target="_blank" className={style.imgWrap}>
              <img src={SourceControlIcon} alt="" />
              main
            </a>
          </li>
          <li>
            <img src={ErrorIcon} alt="" />
            0
          </li>
          <li>
            <img src={WarningIcon} alt="" />
            0
          </li>
        </ul>
        <ul>
          <li>
            <img src={ReactIcon} alt="" className={style.reactIcon} />
            Powered by React.js
          </li>
          <li>
            <img src={CheckIcon} alt="" />
            Prettier
          </li>
          <li>
            <img src={BellIcon} alt="" />
          </li>
        </ul>
      </div>
      <address>
        Kwon Eunjee<br/>
        Email: passby_time@naver.com<br/>
        Tel: 010-3572-1662
      </address>
    </footer>
  );
}

export default Footer;