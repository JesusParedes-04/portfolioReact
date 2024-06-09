import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Illustrator from "../public/Adobe Illustrator.png";
import Photoshop from "../public/Adobe Photoshop.png";
import Bootstrap from "../public/Bootstrap.png";
import CSS3 from "../public/CSS3.png";
import Git from "../public/Git.png";
import Html5 from "../public/HTML5.png";
import JavaScript from "../public/JavaScript.png";
import react from "../public/React.png";
import node from "../public/node.png";
import mongo from "../public/Mongo.png";
import AOS from 'aos';
import { useTranslation } from 'react-i18next'


const Tools = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div data-aos="fade-up">

      <p className={`text-3xl md:text-5xl lg:text-7xl text-center mt-6 md:mt-12 lg:mt-20 mb-6 md:mb-8 lg:mb-10 ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}>
        {t('about4')}
      </p>

     
      <div className="container mx-auto px-4 py-2 mb-20">
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-4 sm:mx-6 md:mx-8 lg:mx-80">

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

    <div className='flex justify-center md:col-start-2'>
      <img src={node} alt="Imagen 9" className="w-full h-auto max-w-md sm:max-w-none" />
    </div>

    <div className='flex justify-center md:col-start-3'>
      <img src={mongo} alt="Imagen 10" className="w-full h-auto max-w-md sm:max-w-none" />
    </div>

  </div>
</div>

    </div>


  );
};
export default Tools;
