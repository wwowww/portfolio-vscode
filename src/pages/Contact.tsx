import { useId } from "react";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import style from "@/assets/styles/Contact.module.scss";
import CodeBlock from "@/components/atoms/CodeStyle/CodeBlock/CodeBlock";
import CodeLine from "@/components/atoms/CodeStyle/CodeLine/CodeLine";
import { CONTACT_INFO } from "@/mocks/contactInfo";

const Contact = () => {
  const id = useId();
  return (
    <>
      <SectionTitle
        title="Contact Me"
        imageSrc="/src/assets/icons/MailIcon.svg"
        className="mail"
      />
      <div className={style.code}>
        <CodeBlock>
          <CodeLine bracket="open" className="socials" key="open" />
          {CONTACT_INFO.map((item) => (
            <CodeLine indent={2} key={id + item.id}>
              {item.title}
              {item.link.length < 1
                ? <em>{item.content}</em>
                : <a href={item.link} target="_blank">{item.content}</a>
              }
            </CodeLine>  
          ))}
          <CodeLine bracket="close" key="close" />
        </CodeBlock>
      </div>
    </>
  )
}

export default Contact;