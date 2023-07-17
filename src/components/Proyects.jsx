import workOne from "../public/Logo-reproductormusica_Mesa de trabajo 1.png";
import workTwo from "../public/Lista-01-01.png";
import WorkThree from "../public/logoMovilO-01.png";
import Footer from "./Footer";
import Graphic from "./Graphic";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
// Importar las demás imágenes de proyectos si es necesario

const Proyects = () => {
  

  const { isDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      title: "MiniReproductor",
      description: ` MiniRepro" es un proyecto que presenta un simulador interactivo de un minireproductor de música, desarrollado mediante el uso de las tecnologías HTML5, CSS3, Bootstrap, JavaScript, SweetAlert. 
      Una de las características destacadas es la integración de la tecnología fetch y la manipulación de archivos JSON, lo que permite cargar y gestionar fácilmente listas de reproducción y canciones con gran eficiencia.
      El acceso a la plataforma principal está protegido por una validación de usuario y contraseña, brindando una capa adicional de seguridad y garantizando la privacidad de los datos personales.
      Usuario: jesus@hotmail.com
      Contraseña: 1234`,
      imageUrl: workOne,
      websiteUrl: "https://minireproductorjs.netlify.app",
    },
    {
      title: "Aplicación Monitoreo Pacientes",
      description: "En este proyecto, me enfoqué en desarrollar una aplicación que permitiera la simulación y monitoreo de pacientes, facilitando tanto el registro como el seguimiento de sus datos y síntomas. Utilizando las tecnologías de React y Tailwind CSS, creamos una interfaz amigable y funcional que posibilita agregar y quitar pacientes de manera sencilla, garantizando al mismo tiempo un almacenamiento seguro y eficiente de su información.",
      imageUrl: workTwo,
      websiteUrl: "https://idyllic-stroopwafel-c39058.netlify.app/",
    },
    {
      title: "Oftalmo Center",
      description: "En OftalmoCenter, se desarrolló un sitio web institucional de cinco páginas que va más allá de lo convencional. Desde su inicio, se propuso aumentar el grado de dificultad y funcionalidades para ofrecer una experiencia de usuario (UX) excepcional. Además del uso de HTML5 y CSS3, hemos implementado Sass y Bootstrap5, dotando al sitio de características que garantizan una navegación fluida y atractiva. Con OftalmoWeb, hemos llevado la presencia en línea de OftalmoCenter al siguiente nivel, brindando a los usuarios una experiencia única y enriquecedora.",
      imageUrl: WorkThree,
      websiteUrl: "https://oftalmocenter.netlify.app",
    },
    // Resto de proyectos...
  ];

  return (


<div data-aos="zoom-in">


<div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-bold uppercase mb-8  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Desarrollo Web</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover rounded-md mb-4 lg:w-1/4 lg:mr-4 lg:mb-0"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={` text- text-white py-2 px-4 rounded-md inline-block w-full lg:w-1/4 lg:inline-block lg:text-left  ${isDarkMode ? " bg-slate-800 text-slate-50" : " bg-slate-800 text-slate-50" }`}
              >
                <p className="text-center">Visitame</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  

    <Graphic/>

    <Footer/>


</div>


  );
};

export default Proyects;
