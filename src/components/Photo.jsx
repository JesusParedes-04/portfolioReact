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


La fotografía es uno de mis hobbies, donde combino mis habilidades en programación, diseño y composición visual. De manera similar a la programación, donde cada línea de código se escribe con precisión para lograr un software funcional y estético, en la fotografía, cada imagen se construye meticulosamente para transmitir una historia o una emoción. Cada toma es una oportunidad para expresar mi creatividad y captar los detalles más significativos.

</p>

<p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

La composición visual se convierte en mi lenguaje de expresión fotográfica, donde elementos como la luz, el color, la perspectiva y la composición se combinan armoniosamente para dar vida a imágenes coherentes y atractivas. Cada sesión fotográfica es una oportunidad para mejorar mis técnicas y capturar momentos especiales.
</p>

<p className={`text-sm md:text-base ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>

La exploración de diferentes técnicas y estilos nutre mi proceso creativo y me desafía a buscar nuevas perspectivas. Al tomar mi cámara, me sumerjo en un mundo de posibilidades donde puedo plasmar mi visión única y capturar la esencia de cada instante. La fotografía me brinda un espacio para disfrutar la fascinación por capturar momentos significativos y apreciar la belleza en lo cotidiano.



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
