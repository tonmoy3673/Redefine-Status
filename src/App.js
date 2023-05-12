

import Banner from './Component/Banner';
import Cultural from './Component/Cultural';
import Deeper from './Component/Deeper';
import Nav from './Component/Nav';
import Overview from './Component/Overview';
import Simple from './Component/Simple';
import Humanity from './Component/Humanity';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';




function App() {

  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    
    const setDark=localStorage.getItem('dark');
    console.log(setDark);
  },[])

  return (
    <div className={`${darkMode ? 'dark ' : 'light'} dark:bg-gray-900 dark:text-white`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='px-10 dark:bg-gray-900 bg-white dark:text-white'>
        <Banner />
        <Overview />
        <Deeper />
        <Simple />
        <Cultural />
        <Humanity />
        <Footer />
      </div>
    </div>
  );
}

export default App;
