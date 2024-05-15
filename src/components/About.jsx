import profileImage from "../public/PurpleProfile.png";
import Tools from "./Tools";
import Footer from "./Footer";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import {  useTranslation } from 'react-i18next'


const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="mt-20 md:mt-30">
   <div data-aos="zoom-in" className="flex flex-col items-center justify-center min-heigh-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center">
            <div>
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover w-full h-auto md:h-80"
              />
            </div>

            <div className="w-full md:w-1/2 pl-8">
              <div>
                <h1 className="text-3xl font-bold md:text-9xl uppercase mt-8 md:mt-10 text-red-700"> {t('about1')} </h1>
                <h2 className={`text-3xl md:text-6xl  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>  {t('about2')}  </h2>
                <p className={`mt-4  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
                {t('about3')} 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Tools />
        <Footer/>

      </div>
    </div>
  );
};

export default About;
