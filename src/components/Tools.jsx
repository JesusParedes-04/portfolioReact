import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';
import  { useEffect } from 'react';
import 'aos/dist/aos.css';
import Illustrator from "../public/Adobe Illustrator.png";
import Photoshop from "../public/Adobe Photoshop.png";
import Bootstrap from "../public/Bootstrap.png";
import CSS3 from "../public/CSS3.png";
import Git from "../public/Git.png";
import Html5 from "../public/HTML5.png";
import JavaScript from "../public/JavaScript.png";
import react from "../public/react.png";
import AOS from 'aos';


const Tools = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div data-aos="fade-up">
      <p className={`text-3xl md:text-7xl text-center mt-6 md:mt-8 mb-6 md:mb-10 ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
        Technologies & Tools
      </p>

      <div className="container mx-auto px-4 py-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-7 sm:mx-6 md:mx-80">
        <div className="flex justify-center">
          <img src={Illustrator} alt="Imagen 1" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={Photoshop} alt="Imagen 2" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={Bootstrap} alt="Imagen 3" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={Git} alt="Imagen 4" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={Html5} alt="Imagen 5" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={CSS3} alt="Imagen 6" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={JavaScript} alt="Imagen 7" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
        <div className="flex justify-center">
          <img src={react} alt="Imagen 8" className="w-full h-auto max-w-md sm:max-w-none" />
        </div>
      </div>
    </div>

    </div>
  );
};
export default Tools;
