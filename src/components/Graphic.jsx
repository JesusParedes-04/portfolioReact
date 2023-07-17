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
const Graphic = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (

<div >
    <div  data-aos="fade-up" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">

    <h1 className={` text-3xl font-bold mb-8 uppercase  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Branding y Diseño</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <div className="col-span-4 md:col-span-3">
          <img src={PalmerasLogo} alt="Imagen 1" className="w-full object-cover rounded-lg shadow-xl h-44 md:h-96" />
        </div>

        <div  className=" col-span-4 md:col-span-1">

            <h2 className={`font-semibold text-3xl mb-6  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Las Palmeras</h2>
          <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

          En el proyecto llevado a cabo en Lima, Perú, se buscó diseñar un logotipo moderno para una panadería, con el propósito de atraer a un público joven. Inicialmente, la panadería contaba únicamente con un nombre y un color principal, los cuales sirvieron como punto de partida para el trabajo. El enfoque principal consistió en emplear los conceptos de repetición, rotación y pregnancia para posicionar la marca en la mente de los consumidores.

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
          Se realizaron mejoras significativas en el diseño al incorporar dos colores secundarios junto al color principal, lo cual enriqueció la diversidad y la identidad de la marca. Se utilizaron mockups, lo que resultó en una identidad visual reconocible y memorable para la marca. El logotipo final fue el resultado de un análisis que logró capturar la verdadera esencia de la panadería. Gracias a su diseño versátil, el logotipo se adapta fácilmente a diversas plataformas y canales de comunicación de marca, asegurando una presencia consistente y atractiva en todos los puntos de contacto con los clientes.
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

    <h2 className={`font-semibold text-3xl mb-6  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Museo Barrilete</h2>
    <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

    El proyecto del Museo Barrilete consistió en un rediseño del logotipo para este museo ubicado en Córdoba, Argentina. El enfoque principal fue la creación de un diseño que conectara con los niños visitantes del museo y los representara de manera adecuada. Tras identificar una sobrecarga de información en el logotipo original, se trabajó en simplificarlo y eliminar elementos innecesarios.

El proceso comenzó con el estudio de diversas formas de barriletes, y se utilizó la estructura de uno de ellos como inspiración para el nuevo diseño. 

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

    La composición y descomposición de elementos permitió crear distintas piezas gráficas, destacándose especialmente el concepto de rotación. Para transmitir el espíritu alegre y lleno de energía de los niños, se seleccionaron cuidadosamente tonos vivaces y vibrantes en la paleta de colores.

El resultado fue un logotipo cautivador y encantador, que logra capturar la esencia del Museo Barrilete y se conecta de manera significativa con su público objetivo, despertando la curiosidad y la emoción de los visitantes más jóvenes.

    </p>
  </div>
</div>

</div>

</div>
  );
};

export default Graphic;

