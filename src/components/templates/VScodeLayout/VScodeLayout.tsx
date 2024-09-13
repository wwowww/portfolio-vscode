import { Routes, Route, useLocation } from 'react-router-dom';
import Tabs from '@/components/molecules/Tabs/Tabs';
import TopMenuBar from '@/components/molecules/TopMenuBar/TopMenuBar';
import SideBar from '@/components/molecules/SideBar/SideBar';
import ExplorerBar from '@/components/molecules/ExplorerBar/ExplorerBar';
import Footer from '@/components/molecules/Footer/Footer';

import Home from "@/pages/Home";
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';
import Setting from '@/pages/Setting';
import CodeExamples from '@/pages/code-examples';

import style from "./VScodeLayout.module.scss";

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
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/projects' element={<Projects />}></Route>
              <Route path='/blog' element={<Blog />}></Route>
              <Route path='/code-example' element={<CodeExamples />}></Route>
              <Route path='/setting' element={<Setting />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default VScodeLayout;