import { useId } from "react";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import style from "@/assets/styles/Contact.module.scss";
import CodeBlock from "@/components/atoms/CodeStyle/CodeBlock/CodeBlock";
import CodeLine from "@/components/atoms/CodeStyle/CodeLine/CodeLine";
import { CONTACT_INFO } from "@/static/mocks/contactInfo";
import Typography from "@/components/atoms/Typography/Typography";
import { EmailForm }  from "@/components/organisms/EmailForm/EmailForm";
import AccountIcon from "@/static/icons/AccountIcon.svg";
import mailIcon from "@/static/icons/MailIcon.svg";

const Contact = () => {
  const id = useId();
  return (
    <>
      <SectionTitle
        title="Contact Me"
        imageSrc={AccountIcon}
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
                : <a href={item.link} target="_blank" className={style.contentLink}>{item.content}</a>
              }
            </CodeLine>  
          ))}
          <CodeLine bracket="close" key="close" />
        </CodeBlock>
      </div>
      <SectionTitle
        title="Send Email"
        imageSrc={mailIcon}
        className="mail"
      />
      <Typography className="body-14-150-400" color="#A2A2A2">메일을 보내주시면 평일 기준 3일 이내로 답장 드리겠습니다!</Typography>
      <EmailForm />
    </>
  )
}

export default Contact;