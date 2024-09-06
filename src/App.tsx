import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import VScodeLayout from './components/templates/VScodeLayout/VScodeLayout';
import '@/assets/styles/theme.scss';

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme", localStorage.getItem("theme")
      );
    }
  }, []);
  
  return (
    <BrowserRouter>
      <VScodeLayout />
    </BrowserRouter>
  )
}

export default App
