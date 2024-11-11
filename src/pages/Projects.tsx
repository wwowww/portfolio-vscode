import ProjectList from "@/components/molecules/projectList/projectList";
import { useProjectPost } from "lib/api/react-query/project";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import Typography from "@/components/atoms/Typography/Typography";
import CodeIcon from "@/static/icons/CodeIcon.svg";

import style from "@/assets/styles/Projects.module.scss";

const Projects = () => {
  const {isLoading, error, data} = useProjectPost();

  return (
    <div className={style.container}>
      <SectionTitle
        title="Project List"
        imageSrc={CodeIcon}
        className="code"
      />
      <Typography Tag="h3" className="title-20-150-400">🌏 Project in Company</Typography>
      <ul className={style.listWrap}>
        {isLoading && <li>Loading ...</li>}     
        {error && <li><p>에러가 발생했습니다! 잠시후 다시 시도해주세요.</p></li>}   
        <ProjectList data={data} copy="company" />
      </ul>
      <br />
      <Typography Tag="h3" className="title-20-150-400">🪐 Personal & Team Project</Typography>
      <ul className={style.listWrap}>
        <ProjectList data={data} copy="personal" />
      </ul>
    </div>
    
  )
}

export default Projects;