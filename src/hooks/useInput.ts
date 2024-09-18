import { useState } from "react";

const SERVICE_ID = `${import.meta.env.VITE_PUBLIC_SERVICE_ID}`;
const TEMPLATE_ID = `${import.meta.env.VITE_PUBLIC_TEMPLATE_ID}`;
const PUBLIC_KEY = `${import.meta.env.VITE_PUBLIC_PUBLIC_KEY}`;

export const useInput = () => {
  const [user, setUser] = useState({
    name: "", phone: "", email: "", message: ""
  });

  // 
  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onReset = () => {
    setUser({ name: "", phone: "", email: "", message: "" });
  };

  return { user, onChangeInput, onReset }
}