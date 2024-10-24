import { useCallback, useId } from "react";
import style from "./projectList.module.scss";
type Props = {
  data: any;
  copy?: string;
}

const ProjectList = ({data, copy}: Props) => {
  const id = useId();

  const separationList = useCallback((copy: string) => {
    if (data) return (
      data .filter(item =>item.copy === copy)
        .map((item: any) => (
          <li key={item.id + id} className={style.list}>
            <img src={item.image} alt={item.copy} className={style.image} />
            <div className={style.content}>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {item.notionLink.length !== 0 && <a href={item.notionLink} target="_blank" className={style.notion}>프로젝트 상세</a>}
                {item.notionLink.length !== 0 && <a href={item.projectLink} target="_blank" className={style.notion}>프로젝트 기술서</a>}
                <div className={style.githubDemoTagWrap}>
                  {item.githubLink.length !== 0 && <a href={item.githubLink} target="_blank" className={style.github}>Github</a>}
                  {item.demoLink.length !== 0 && <a href={item.demoLink} target="_blank" className={style.demo}>Demo</a>}
                </div>
              </div>
              <ul className={style.tag}>
                {item.tag.map((tag, index) =>
                  <li key={item.id + `${index}`}>
                    #{tag}
                  </li>
                )}
              </ul>
            </div>
          </li>
        ))
    )
  }, [data]);
  

  return (
    separationList(copy as string)
  )
}

export default ProjectList;