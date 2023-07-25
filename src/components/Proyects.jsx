import Slider from "react-slick";
import workOne from "../public/minireproductorjs.netlify.app.jpeg";
import workTwo from "../public/Seguimiento Pacientes.jpeg";
import WorkThree from "../public/OftalmoCenter.png";
import Workfour from "../public/cofi.jpeg";
import Footer from "./Footer";
import Graphic from "./Graphic";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const projects = [

    {
      title: "CofiBucks",
      description: "Proyecto e-commerce construido y siguiendo las mejores prácticas con React, asegurando una experiencia de usuario fluida y receptiva en todos los dispositivos. Además, se utilizó React Router para una navegación entre páginas y Context Provider. La funcionalidad del carrito de compras integrado en el sitio permite a los usuarios seleccionar sus productos favoritos y gestionar sus pedidos de manera intuitiva. También se utilizó Bootstrap para asegurar un diseño moderno.",
      imageUrl: Workfour,
      websiteUrl: "https://cofibucks.netlify.app/",
    },

    {
      title: "Aplicación Monitoreo Pacientes",
      description:
        "En este proyecto, me enfoqué en desarrollar una aplicación que permitiera la simulación y monitoreo de pacientes, facilitando tanto el registro como el seguimiento de sus datos y síntomas. Utilizando las tecnologías de React y Tailwind CSS, creé una interfaz amigable y funcional que posibilita agregar y quitar pacientes de manera sencilla, garantizando al mismo tiempo un almacenamiento seguro y eficiente de su información.",
      imageUrl: workTwo,
      websiteUrl: "https://idyllic-stroopwafel-c39058.netlify.app/",
    },
    {
      title: "Oftalmo Center",
      description:
        "En OftalmoCenter, se desarrolló un sitio web institucional de cinco páginas que va más allá de lo convencional. Desde su inicio, se propuso aumentar el grado de dificultad y funcionalidades para ofrecer una experiencia de usuario (UX) excepcional. Además del uso de HTML5 y CSS3, hemos implementado Sass y Bootstrap5, dotando al sitio de características que garantizan una navegación fluida y atractiva. Con OftalmoWeb, hemos llevado la presencia en línea de OftalmoCenter al siguiente nivel, brindando a los usuarios una experiencia única y enriquecedora.",
      imageUrl: WorkThree,
      websiteUrl: "https://oftalmocenter.netlify.app",
    },

    {
      title: "MiniReproductor",
      description: `MiniRepro" es un proyecto que presenta un simulador interactivo de un minireproductor de música, desarrollado mediante el uso de las tecnologías HTML5, CSS3, Bootstrap, JavaScript, SweetAlert. 
      Una de las características destacadas es la integración de la tecnología fetch y la manipulación de archivos JSON, lo que permite cargar y gestionar fácilmente listas de reproducción y canciones con gran eficiencia.
      El acceso a la plataforma principal está protegido por una validación de usuario y contraseña, brindando una capa adicional de seguridad y garantizando la privacidad de los datos personales.
      Usuario: jesus@hotmail.com
      Contraseña: 1234`,
      imageUrl: workOne,
      websiteUrl: "https://minireproductorjs.netlify.app",
    },


  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div data-aos="zoom-in">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold uppercase mb-8  ${isDarkMode ? " text-slate-50" : " text-slate-800"
            }`}
        >
          Desarrollo Web
        </h2>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover rounded-md mb-4 lg:w-full lg:mr-4 lg:mb-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 mt-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white py-2 px-4 flex items-center justify-center rounded-md w-full lg:w-1/4 mx-auto ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-800 text-slate-50"
                    }`}
                >
                  <p className="text-center">Visitame</p>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Graphic />

      <Footer />
    </div>
  );
};

export default Proyects;
