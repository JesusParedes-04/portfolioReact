
import { useContext, useState } from 'react';
import { FiMoon, FiSun,  FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { ThemeContext } from './ThemeProvider';
import { Link } from 'react-router-dom';
import {  useTranslation } from 'react-i18next'

const MainNav = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };


  const handleLanguageToggle = () => {
    console.log('Current Language:', i18n.language);
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    console.log('Changing to Language:', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>
      <div className="hidden md:flex items-center flex-grow">
        <div className="flex flex-grow justify-center">
          <Link to="/" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>{t('home')}</Link>
          <Link to="/about" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>{t('about')}</Link>
          <Link to="/proyects" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>{t('projects')}</Link>
          <Link to="/album" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>{t('album')}</Link>
          <Link to="/contact" className={`mx-4 hover:font-bold  ${isDarkMode ? 'bg-slate-800 text-slate-50 ' : 'bg-slate-200 text-slate-800 '}`}>{t('contact')}</Link>

        </div>
      </div>
      <div className="flex items-center">
        <button
          className="mr-2 text-slate-50 hover:text-gray-300 md:hidden"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="z-10 absolute top-0 right-0 p-4 bg-slate-800 w-64 h-screen">
            <div className="flex items-center mb-4">
              <button
                className="ml-auto text-slate-50 hover:text-gray-300"
                onClick={handleMenuToggle}
              >
                <FiX />
              </button>
            </div>
            <div className="flex flex-col">
              <Link to="/" className="my-2 text-white hover:text-gray-200">Inicio</Link>
              <Link to="/about" className="my-2 text-white hover:text-gray-200">Sobre mí</Link>
              <Link to="/proyects" className="my-2 text-white hover:text-gray-200">Proyectos</Link>
              <Link to="/album" className="my-2 text-white hover:text-gray-200">Album</Link>
              <Link to="/contact" className="my-2 text-white hover:text-gray-200">Contacto</Link>
            </div>
            <div className="mt-auto">
              <button
                className={`mr-2 ${isDarkMode ? 'bg-gray-800 text-slate-200' : 'bg-slate-800 text-gray-200'}`}
                onClick={handleDarkModeToggle}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              { <button
                className="mr-2 text-white hover:text-gray-300"
                onClick={handleLanguageToggle}
              >
                <FiGlobe />
              </button>   }
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <button
            className={`mr-2 ${isDarkMode ? 'bg-gray-800 text-slate-200' : 'bg-slate-200 text-gray-900'}`}
            onClick={handleDarkModeToggle}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          { <button
            className={`mr-2 ${isDarkMode ? 'bg-gray-800 text-slate-50' : 'bg-slate-00 text-gray-900'}`}
            onClick={handleLanguageToggle}
          >
            <FiGlobe />
          </button>  }
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
