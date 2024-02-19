import Slider from "react-slick";
import workOne from "../public/1.png";
import workTwo from "../public/2.png";
import WorkThree from "../public/4.png";
import Workfour from "../public/3.png";
import Footer from "./Footer";
import Graphic from "./Graphic";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useTranslation } from 'react-i18next'

const Proyects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const projects = [


    {
      title: t('Monitoreo1'),
      description:
      t('pdescription2'),
      imageUrl: workTwo,
      websiteUrl: "https://idyllic-stroopwafel-c39058.netlify.app/",
    },

    {
      title: "Weatherappi",
      description:   t('pdescription4'),
      imageUrl: workOne,
      websiteUrl: "weatherappir.netlify.app",
    },

    {
      title: "CofiBucks",
      description: t('pdescription1'),
      imageUrl: Workfour,
      websiteUrl: "https://cofibucks.netlify.app/",
    },

    {
      title: "NodeChat",
      description:       t('pdescription3'),

      imageUrl: WorkThree,
      websiteUrl: "https://chat-wdj6.onrender.com/",
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
        className={`text-3xl font-bold uppercase mb-8 mt-20 ${isDarkMode ? " text-slate-50" : " text-slate-800"
          }`}
      >

{t('development')}
      </h2>

      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-row"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover rounded-md mb-4 lg:w-fit lg:mr-4 lg:mb-0"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2 mt-4 mx-6">{project.title}</h3>
              <p className="text-gray-600 mb-4  mx-6">{project.description}</p>

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
      <Graphic />
      <Footer />

    </div>


    </div>
  );
};

export default Proyects;
