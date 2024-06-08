
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Footer from "./Footer";

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (

    <div>


      <div className='container mx-auto'>
      <div className="flex justify-center items-center screen">
        <div className="col-span-3 flex flex-col justify-end md:flex-row md:justify-end items-center relative">
          <div className="text-center"> 
            <h1 className={`text-3xl md:text-7xl font-bold uppercase ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}>Jesús Paredes</h1>
            <h2 className={`text-right text-lg md:text-2xl uppercase ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}>FrontEnd Web Designer</h2>
            <div className="slider-thumb absolute top-0 left-0 w-10 h-10 -z-10"></div>

          </div>
        </div>
      </div>



      </div>

      <Footer/>

    </div>
  );
};

export default Home;
