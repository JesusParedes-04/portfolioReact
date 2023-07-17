import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Footer from './Footer';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <>
     
      <div className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            <div className="p-4 col-span-3 flex flex-col justify-end md:flex-row md:justify-end items-center">
              <div className="animate-pulse bg-light-primary h-16 w-16 m-4 "></div>
              <div className="text-center">
                <h1 className={`text-3xl md:text-7xl font-bold uppercase ${isDarkMode? "text-slate-50": "text-slate-800"}`}>Jesus Paredes</h1>
                <h2 className={`text-left text-lg md:text-2xl uppercase ${isDarkMode? "text-slate-50": "text-slate-800"}`}>FrontEnd Web Designer</h2>
              </div>
            </div>
            <div className="p-4 relative col-span-1 flex justify-center md:justify-left items-center">
            
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default Home;
