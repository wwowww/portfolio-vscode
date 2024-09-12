import Typography from "@/components/atoms/Typography/Typography";
import style from "./SectionTitle.module.scss";

type Props = {
  title: string;
  imageSrc?: string;
  className?: string;
}

const SectionTitle = ({title, imageSrc, className}: Props) => {
  return (
    <div className={style.wrap}>
      <Typography Tag="h2" className="body-24-140-600">
        <img src={imageSrc} alt={`${className} icon.`} className={style[className]} />
        {title}
      </Typography>
    </div>
  )
}

export default SectionTitle;