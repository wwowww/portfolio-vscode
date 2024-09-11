import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "@/pages/Home";
import Tabs from '@/components/molecules/Tabs/Tabs';
import TopMenuBar from '@/components/molecules/TopMenuBar/TopMenuBar';
import SideBar from '@/components/molecules/SideBar/SideBar';
import style from "./VScodeLayout.module.scss";
import ExplorerBar from '@/components/molecules/ExplorerBar/ExplorerBar';

const VScodeLayout = () => {
  const location = useLocation();
  const this_pathName = location.pathname;

  return (
    <>
      <TopMenuBar />
      <div className={style.layout}>
        <SideBar />
        <ExplorerBar />
        <div className={style.main}>
          <Tabs />
          <div className={`${style.contents} ${this_pathName === '/code-examples' ? style.code_examples : null}`}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default VScodeLayout;