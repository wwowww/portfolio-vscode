import ProjectList from "@/components/molecules/projectList/projectList";
import { useAPI } from "lib/api/react-query/project";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import Typography from "@/components/atoms/Typography/Typography";

import style from "@/assets/styles/Projects.module.scss";

const Projects = () => {
  const {isLoading, error, data} = useAPI();

  return (
    <div className={style.container}>
      <SectionTitle
        title="Project List"
        imageSrc="/src/assets/icons/CodeIcon.svg"
        className="code"
      />
      {error && <p>에러가 발생했습니다! 잠시후 다시 시도해주세요.</p>}
      <Typography Tag="h3" className="title-20-150-400">🌏 Project in Company</Typography>
      <ul className={style.listWrap}>
        {isLoading && (
          <li>
            Loading ...
          </li>
        )}        
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