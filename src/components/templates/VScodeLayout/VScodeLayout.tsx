import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "@/pages/Home";
// import '@/assets/styles/font.scss';
import style from "./VScodeLayout.module.scss";

const VScodeLayout = () => {
  const location = useLocation();
  const this_pathName = location.pathname;

  return (
    <div className={style.layout}>
      <div className={style.main}>

      
        <div className={`${style.contents} ${this_pathName === '/code-examples' ? style.code_examples : null}`}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default VScodeLayout;