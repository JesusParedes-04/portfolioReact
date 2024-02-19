import image9 from "../public/CSC_0814.jpg";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useTranslation } from 'react-i18next'



const Photo = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (


    <div className="container mx-auto mt-20 py-12 sm:px-6 lg:px-1">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="col-span-3 md:col-span-1 lg:col-span-2 row-span-2">

          <h2 className={`font-bold uppercase text-4xl mb-4" ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> {t('photo1')}</h2>
          <h3 className={`font-semibold text-2xl mb-4" ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> {t('photo2')} </h3>

          <div className={`mt-6 ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>


            <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

              {t('photo3')}

            </p>

            <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

              {t('photo4')}
            </p>

            <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>


              {t('photo5')}


            </p>

          </div>
        </div>

        <div className="  col-span-3 md:col-span-2 lg:col-span-1 lg:row-span-2">
          <img src={image9} alt="Imagen" className="w-full object-cover rounded-lg shadow-xl h-44 md:h-96 bg-center" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
