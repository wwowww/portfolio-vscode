import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "@/pages/Home";
import style from "./VScodeLayout.module.scss";
import Tabs from '@/components/molecules/Tabs/Tabs';

const VScodeLayout = () => {
  const location = useLocation();
  const this_pathName = location.pathname;

  return (
    <div className={style.layout}>
      <div className={style.main}>
        <Tabs />
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