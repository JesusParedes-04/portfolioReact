import PalmerasLogo from "../public/logoprincipal-01.png"
import PalmerasImg1 from "../public/Craft Coffee Bag Mockup.png"
import PalmerasImg2 from "../public/CupsPalmeras.png"
import PalmerasImg3 from "../public/Free Paper Coffee Cup Mockup.png"
import PalmerasImg4 from "../public/Business Card Mockup blue and green.png"
import PalmerasImg5 from "../public/logo3-01.png"
import PalmerasImg6 from "../public/Modern Hanging Banner Mockup.png"
import PalmerasImg7 from "../public/Paper Shopping ðÆag Beautiful Mockup yellow.png"
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import {  useTranslation } from 'react-i18next'

const Graphic = () => {

  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (

<div >
    <div  data-aos="fade-up" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">

    <h1 className={` text-3xl font-bold mb-8 uppercase  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> {t("brandingT")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <div className="col-span-4 md:col-span-3">
          <img src={PalmerasLogo} alt="Imagen 1" className="w-full object-cover rounded-lg shadow-xl h-44 md:h-96" />
        </div>

        <div  className=" col-span-4 md:col-span-1">

            <h2 className={`font-semibold text-3xl mb-6  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Las Palmeras</h2>
          <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

{t('pdescription8')}
          </p>
        </div>

        <div className=" col-span-4 md:col-span-1 order-3 md:order-none ">
          <img src={PalmerasImg1} alt="Imagen 1" className="w-full h-full object-cover rounded-lg shadow-xl md:h-96" />
        </div>

        <div className=" col-span-4 md:col-span-1 order-4 md:order-none">
          <img src={PalmerasImg2} alt="Imagen 1" className="w-full h-full object-cover  rounded-lg shadow-xl md:h-96" />
        </div>

        <div className=" col-span-4 md:col-span-1 order-5 md:order-none">
          <img src={PalmerasImg3} alt="Imagen 1" className="w-full h-full object-cover  rounded-lg shadow-xl md:h-96" />
        </div>

        <div className=" col-span-4 md:col-span-1 order-2 md:order-none">
          <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
  {t('pdescription5')}
          </p>
        </div>
      </div>
      
    </div>

<div data-aos="fade-up" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
  <div className=" col-span-4 md:col-span-3">
    <img src={PalmerasImg5} alt="Imagen 1" className="w-full h-full object-cover   rounded-lg shadow-xl md:h-96" />
  </div>

  <div  className=" col-span-4 md:col-span-1">

    <h2 className={`font-semibold text-3xl mb-6  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> {t('tmuseum')}</h2>
    <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

    {t('pdescription6')}


    </p>
  </div>

  <div className=" col-span-4 md:col-span-1 order-3 md:order-none">
    <img src={PalmerasImg6} alt="Imagen 1" className="w-full h-full object-cover   rounded-lg shadow-xl md:h-96" />
  </div>

  <div className=" col-span-4 md:col-span-1 order-4 md:order-none">
    <img src={PalmerasImg4} alt="Imagen 1" className="w-full h-full object-cover   rounded-lg shadow-xl md:h-96" />
  </div>

  <div className=" col-span-4 md:col-span-1 order-5 md:order-none">
    <img src={PalmerasImg7} alt="Imagen 1" className="w-full h-full object-cover   rounded-lg shadow-xl md:h-96" />
  </div>

  <div className=" col-span-4 md:col-span-1 order-2 md:order-none">
    <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

    {t('pdescription7')}

    </p>
  </div>
</div>

</div>

</div>
  );
};

export default Graphic;

