import { useContext, useState } from 'react';
import { FiMoon, FiSun,  FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from './ThemeProvider';
import { Link } from 'react-router-dom';

const MainNav = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  // const [isTranslated, setIsTranslated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  // const handleTranslationToggle = () => {
  //   setIsTranslated(!isTranslated);
  // };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>
      <div className="hidden md:flex items-center flex-grow">
        {/* <h1 className="text-lg font-bold">Logo</h1>   AGREGAR LOGO */}
        <div className="flex flex-grow justify-center">
          <Link to="/" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>Inicio</Link>
          <Link to="/about" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>Sobre mí</Link>
          <Link to="/proyects" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>Proyectos</Link>
          <Link to="/album" className={`mx-4 hover:font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'}`}>Album</Link>
          <Link to="/contact" className={`mx-4 hover:font-bold  ${isDarkMode ? 'bg-slate-800 text-slate-50 ' : 'bg-slate-200 text-slate-800 '}`}>Contacto</Link>

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
              {/* <h1 className="text-lg font-bold">Logo</h1> */}
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
                className={`mr-2 ${isDarkMode ? 'bg-gray-900 text-slate-200' : 'bg-slate-800 text-gray-00'}`}
                onClick={handleDarkModeToggle}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              {/* <button
                className="mr-2 text-white hover:text-gray-300"
                onClick={handleTranslationToggle}
              >
                <FiGlobe />
              </button>   AGREGAR FUNCIÓN TRADUCIR LUEGO */}
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <button
            className={`mr-2 ${isDarkMode ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 text-gray-900'}`}
            onClick={handleDarkModeToggle}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          {/* <button
            className={`mr-2 ${isDarkMode ? 'bg-gray-900 text-slate-50' : 'bg-slate-100 text-gray-900'}`}
            onClick={handleTranslationToggle}
          >
            <FiGlobe />
          </button>  AGREGAR FUNCIÓN TRADUCIR LUEGO */  }
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
