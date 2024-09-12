import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import style from "@/assets/styles/Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <SectionTitle
        title="Contact Me"
        imageSrc="/src/assets/icons/MailIcon.svg"
        className="mail"
      />
    </div>
  )
}

export default Contact;