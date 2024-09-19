import CodeBlock from "@/components/atoms/CodeStyle/CodeBlock/CodeBlock";
import CodeLine from "@/components/atoms/CodeStyle/CodeLine/CodeLine";
import RunnerEunjee from "@/components/molecules/RunnerEunjee/RunnerEunjee";

const About = () => {
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
        <CodeLine htmlTag="header" indent={4} attribute="class" attributeContent="information"  />

        <CodeLine htmlTag="header" indent={4} tagClose />
        <CodeLine htmlTag="main" indent={4} attribute="class" attributeContent="skills" />
        <CodeLine indent={6}>경험을 토대로 작성할 것! 프로젝트들</CodeLine>

        <CodeLine htmlTag="main" indent={4} tagClose />

        <CodeLine htmlTag="section" indent={4} attribute="class" attributeContent="career" />

        <CodeLine htmlTag="section" indent={4} tagClose />
        <CodeLine htmlTag="footer" indent={4} attribute="class" attributeContent="education" />

        <CodeLine htmlTag="footer" indent={4} tagClose />
        <CodeLine htmlTag="body" indent={2} tagClose />
        <CodeLine htmlTag="html" tagClose />
      </CodeBlock> 
    </>
  ) 
}

export default About;