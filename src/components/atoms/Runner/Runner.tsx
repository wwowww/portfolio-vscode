import { useEffect, useState } from "react";

const Runner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const number = setInterval(() => {
      (count < 10) ? setCount(count + 1) : setCount(1)
    }, 150);

    return () => clearInterval(number);
  });

  return (
    <img src={"/src/static/images/run/run_" + count + ".gif"} alt="Runner eunjee." />
  ) 
};
  

export default Runner;