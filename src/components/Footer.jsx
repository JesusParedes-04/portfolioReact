import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={` p-4 ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-800'  }`}>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.instagram.com/jesuparedes_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-slate-600 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/jesuparedes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-slate-600 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JesusParedes-04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-slate-600 transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
