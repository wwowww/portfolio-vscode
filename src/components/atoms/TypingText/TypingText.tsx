import { useEffect, useRef, useState } from "react";

const TypingText = ({text, frame}: any) => {
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = text;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) return title;

        return result;
      });
    }, frame);

    return () => clearInterval(typingInterval);
  });

  return <span>{title}</span>;
};

export default TypingText;