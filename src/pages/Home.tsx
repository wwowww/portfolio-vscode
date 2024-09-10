import { useNavigate } from "react-router-dom";
import VscodeIcon from "@/assets/icon/VscodeIcon";
import Typography from "@/components/atoms/Typography/Typography";
import TypingText from "@/components/atoms/TypingText/TypingText";
import HomeButton from "@/components/atoms/Button/HomeButton";
import style from "@/assets/styles/Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.home}>
      <div className={style.container}>
        <VscodeIcon className={style.icon_vscode} />
        <header>
          <div className={style.title}>
            <Typography Tag="h1" className="title-40-140-600">
              <TypingText text="Hello Eunjee World!" frame={100} />
            </Typography>
          </div>
          <Typography Tag="p" className="body-24-140-600">
            I'm Frontend Developer
          </Typography>
        </header>
        <div className={style.buttonWrapper}>
          <HomeButton
            onClick={() => {
              navigate("/projects");
            }}
            type="background"
          >
            View Projects
          </HomeButton>
          <HomeButton
            onClick={() => {
              navigate("/contact");
            }}
            type="border"
          >
            Contact Me
          </HomeButton>
        </div>
      </div>
    </div>
  )
}

export default Home;