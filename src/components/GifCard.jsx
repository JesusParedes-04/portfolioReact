import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


const GifCard = ({ title, gifSrc }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={gifSrc} alt={title} className="w-full object-cover h-64" />
      <div className="px-6 py-4">
      <div className={`font-bold text-center text-xl mb-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{title}</div>
      </div>
    </div>
  );
};

export default GifCard;
