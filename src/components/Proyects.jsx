import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useTranslation } from 'react-i18next';
import workOne from "../public/1.png";
import workTwo from "../public/2.png";
import workThree from "../public/4.png";
import workFour from "../public/3.png";
import workFive from "../public/personalpay.png";
import worksix from "../public/personalpay2.png";
import workseven from "../public/personalpay3.png";

import Footer from "./Footer";
import GifCard from "./GifCard";

const Proyects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const projects = [
    {
      title: t('Monitoreo1'),
      description: t('pdescription2'),
      imageUrl: workTwo,
      websiteUrl: "https://idyllic-stroopwafel-c39058.netlify.app/",
    },
    {
      title: "Weatherappi",
      description: t('pdescription4'),
      imageUrl: workOne,
      websiteUrl: "weatherappir.netlify.app",
    },
    {
      title: "CofiBucks",
      description: t('pdescription1'),
      imageUrl: workFour,
      websiteUrl: "https://cofibucks.netlify.app/",
    },
    {
      title: "NodeChat",
      description: t('pdescription3'),
      imageUrl: workThree,
      websiteUrl: "https://chat-wdj6.onrender.com/",
    },
  ];

  const gifs = [
    {
      title: "Palmeras",
      gifSrc: "src/public/gifs/palmeras.gif",
    },
    {
      title: "Barrilete ",
      gifSrc: "src/public/gifs/Barrilete.gif",
    },


    {
      title: "Microsoft Maps",
      gifSrc: "src/public/gifs/Microsoft maps.gif",
    }
  ];

  

  return (
    <div data-aos="zoom-in">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold uppercase mb-8 mt-20 ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}
        >
          {t('development')}
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-row mb-8"
          >
            <div className="flex flex-col justify-center lg:w-2/3">
              <h3 className="text-lg font-semibold mb-2 mt-4 mx-6">{project.title}</h3>
              <p className="text-gray-600 mb-4 mx-6">{project.description}</p>
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white py-2 px-4 flex items-center justify-center rounded-md w-full lg:w-1/4 mx-6 ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-800 text-slate-50"}`}
              >
                <p className="text-center"> {t('visit-buttom')}</p>
              </a>
            </div>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover rounded-md mb-4 lg:w-1/3 lg:mr-4 lg:mb-0"
            />
          </div>
        ))}

<h2
          className={`text-2xl font-bold uppercase mb-8 mt-20 ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}
        >
          {t('Branding')}
        </h2>

        <div className="flex flex-wrap justify-center">
          {gifs.map((gif, index) => (
            <GifCard key={index} title={gif.title} gifSrc={`${gif.gifSrc} `} />
          ))}
        </div>


        <h2
          className={`text-2xl font-bold uppercase mb-8 mt-20 ${isDarkMode ? "text-slate-50" : "text-slate-800"}`}
        >
          {t('otherProjects')}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 uppercase">{t('projectTitle1')}</h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-48 h-48 p-2 mr-6 mb-6">
              <img
                src={workFive}
                alt="personalpay"
                className="w-full h-full object-cover rounded-md transition-transform transform hover:scale-125"
              />
            </div>
            <div className="w-48 h-48 p-2 mr-6 mb-6">
              <img
                src={worksix}
                alt="personalpay2"
                className="w-full h-full object-cover rounded-md transition-transform transform hover:scale-125"
              />
            </div>
            <div className="w-48 h-48 p-2 mr-6 mb-6">
              <img
                src={workseven}
                alt="personalpay3"
                className="w-full h-full object-cover rounded-md transition-transform transform hover:scale-125"
              />
            </div>
          </div>
        </div>


        <Footer />
      </div>
    </div>
  );
};

export default Proyects;
