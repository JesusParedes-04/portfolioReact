import image9 from "../public/CSC_0814.jpg";
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useTranslation } from 'react-i18next'



const Photo = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [hoverText, setHoverText] = useState(t('photo3'));


  //Variables para el hover del H1
  const handleMouseEnter = () => {
    setHoverText(t('newPhoto3Text'));
  };

  const handleMouseLeave = () => {
    setHoverText(t('photo3'));
  };



  return (


    <div className="container mx-auto mt-20 py-12 sm:px-6 lg:px-1">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
      <div className="col-span-3 md:col-span-1 lg:col-span-2 row-span-2 relative">
        <h2 className={`font-bold  uppercase text-size ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}>
          {t('photo1')}
        </h2>
        <h2 className={`font-bold text-center uppercase text-size ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}>
          {t('photo2')}
        </h2>
        <h1
          className="font-bold uppercase opacity-90 gradient-text text-right absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hoverText}
        </h1>
      <div className="separation-line"></div>
      </div>
    </div>
  </div>
  );
};

export default Photo;
