import image9 from "../public/CSC_0814.jpg";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const Photo = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (


    <div className="container mx-auto mt-20 py-12 sm:px-6 lg:px-1">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="col-span-3 md:col-span-1 lg:col-span-2 row-span-2">

          <h2 className={`font-bold uppercase text-4xl mb-4" ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> La belleza del código visual</h2>
          <h3 className={`font-semibold text-2xl mb-4" ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}> Descubriendo la armonía en la programación fotográfica</h3>

          <div className={`mt-6 ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
            <p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
              La fotografía es uno de mis hobbies, donde convergen mis habilidades en programación, diseño y composición visual. A través de la programación, puedo utilizar herramientas y técnicas avanzadas para capturar y editar imágenes, brindándoles un toque personalizado y profesional. Mi experiencia en diseño me permite crear composiciones equilibradas y estéticamente atractivas, utilizando principios de diseño como la regla de los tercios y el uso del color. Esta combinación de habilidades me permite llevar mis fotografías al siguiente nivel, contando historias visuales impactantes y transmitiendo emociones a través de cada imagen.
              Al fusionar la programación, el diseño y la composición en mi práctica fotográfica, puedo lograr resultados extraordinarios. La programación me brinda la capacidad de automatizar tareas, optimizar la calidad visual y aplicar efectos especiales a mis imágenes. Al mismo tiempo, mi conocimiento en diseño y composición me permite crear imágenes visualmente cautivadoras, donde cada elemento se coloca estratégicamente para lograr un equilibrio y una armonía visual. Esta fusión de habilidades me impulsa a buscar constantemente nuevas formas de capturar momentos únicos y expresar mi creatividad a través de la fotografía.
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
