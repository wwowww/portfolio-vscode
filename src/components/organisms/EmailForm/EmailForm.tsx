import { useRef } from "react";
import {useInput} from "@/hooks/useInput";
import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Textarea from "@/components/atoms/Textarea/Textarea";
import emailjs from '@emailjs/browser';

import style from "./EmailForm.module.scss";
import Modal from "@/components/molecules/Modal/Modal";

const SERVICE_ID = `${import.meta.env.VITE_PUBLIC_SERVICE_ID}`;
const TEMPLATE_ID = `${import.meta.env.VITE_PUBLIC_TEMPLATE_ID}`;
const PUBLIC_KEY = `${import.meta.env.VITE_PUBLIC_PUBLIC_KEY}`;

export const EmailForm = (e) => {
  const form = useRef();
  const {user, onChangeInput } = useInput();
  const { name, phone, email, message } = user;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("메일 보내기에 실패했습니다. 재시도 해주세요.")
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <div className={style.contentList}>
        <div className={style.inputListWrap}>
          <Label>Name</Label>
          <Input type="text" name="name" value={name} onChange={onChangeInput} placeholder="성함을 입력해 주세요." required />
          <Label>Phone</Label>
          <Input type="number" name="phone" value={phone} onChange={onChangeInput} placeholder="핸드폰 번호를 입력해 주세요." required />
          <Label>Email</Label>
          <Input type="email" name="email" value={email} onChange={onChangeInput} placeholder="답장 받을 이메일을 입력해 주세요." required />
        </div>
        <div className={style.textareaWrap}>
          <Label>Message</Label>
          <Textarea name="message" value={message} onChange={onChangeInput} required />
        </div>
      </div>
      <Input type="submit" value="메일 보내기" />
    </form>
  );
};