import CodeBlock from "@/components/atoms/CodeStyle/CodeBlock/CodeBlock";
import CodeLine from "@/components/atoms/CodeStyle/CodeLine/CodeLine";
import RunnerEunjee from "@/components/molecules/RunnerEunjee/RunnerEunjee";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <RunnerEunjee />
      <CodeBlock>
        <CodeLine htmlTag="html" attribute="lang" attributeContent="ko" />
        {/* <CodeLine htmlTag="head" indent={2} /> */}
          {/* <CodeLine htmlTag="title" indent={4} /> */}
          {/* <CodeLine indent={6}>안녕하세요. 프론트엔드 개발자 권은지입니다.</CodeLine> */}
          {/* <CodeLine htmlTag="title" indent={4} tagClose /> */}
        {/* <CodeLine htmlTag="head" indent={2} tagClose /> */}
        <CodeLine htmlTag="body" indent={2} />
        <CodeLine htmlTag="header" indent={4} attribute="class" attributeContent="information" />
        <CodeLine indent={6}>
          함께 일하는 팀원들간의 소통을 중요하게 생각합니다❤️
        </CodeLine>
        <CodeLine indent={6}>
          스토리북을 사용해 디자이너, 기획자와 원활한 커뮤니케이션을 한 경험이 다수 있습니다. 
        </CodeLine>
        <CodeLine indent={6}>
          FE에 적용해 보고 싶거나 관련 있는 기술을 학습해 팀원들과 공유하고 업무에 적용해본 경험이 있습니다. 
        </CodeLine>
        <CodeLine indent={6}>
          단순히 기능을 완성하는 것이 아닌 코드 퀄리티에도 신경쓰는 개발자가 되려 노력하고 있습니다.
        </CodeLine>
        <CodeLine htmlTag="header" indent={4} tagClose />
        <CodeLine htmlTag="main" indent={4} attribute="class" attributeContent="skills" />
        <CodeLine indent={6}>
          <strong>Typescript</strong>
          <strong>React</strong>
          <strong>NextJS</strong>
          <strong>Vue</strong>
          <strong>NuxtJS</strong>
          <strong>Zustand</strong>
          <strong>React Query</strong>
          <strong>Turborepo</strong>
          <strong>Github</strong>
          <strong>Jira</strong>
        </CodeLine>
        <CodeLine htmlTag="main" indent={4} tagClose />

        <CodeLine htmlTag="section" indent={4} attribute="class" attributeContent="career" />
        <CodeLine indent={6}>
          <ol>
            <li>
              <a href="https://kwoneunjee.notion.site/136b6a7ed2da80b893caffd5f894e1f8?pvs=4" target="_blank">
                1. Notion 상세 프로젝트 기술서 보러가기
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/projects");
              }}
            >
              2. Projects로 이동하기
            </li>
          </ol>
        </CodeLine>
        <CodeLine htmlTag="section" indent={4} tagClose />
        <CodeLine htmlTag="footer" indent={4} attribute="class" attributeContent="last-updated" />
        <CodeLine indent={6}>@2024.11.11 / Thank you!</CodeLine>
        <CodeLine htmlTag="footer" indent={4} tagClose />
        <CodeLine htmlTag="body" indent={2} tagClose />
        <CodeLine htmlTag="html" tagClose />
      </CodeBlock> 
    </>
  ) 
}

export default About;