
import Runner from "@/components/atoms/Runner/Runner";
import SpeechBubble from "@/components/atoms/SpeechBubble/SpeechBubble";
import style from "./RunnerEunjee.module.scss";
import Typography from "@/components/atoms/Typography/Typography";

const RunnerEunjee = () => {
  return (
    <div className={style.wrap}>
      <Runner/>
      <SpeechBubble>
        <Typography className="title-14-140-400" Tag="h2">안녕하세요! <br/>프론트엔드 개발자 권은지입니다.</Typography>
        <br />
        <a href="https://eunjee-run.vercel.app" target="_blank" className={style.link}>도트디자인 포트폴리오 보러가기</a>
      </SpeechBubble>
    </div>
  )
}

export default RunnerEunjee;