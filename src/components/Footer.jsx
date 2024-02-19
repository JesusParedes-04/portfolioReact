import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (

    <footer className={` container mb-5 mx-auto text-center ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
        <p className="text-sm">
          © {new Date().getFullYear()} {t('rights')}
        </p>
    </footer>



      
  );
};

export default Footer;
