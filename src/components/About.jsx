import profileImage from "../public/PurpleProfile.png";
import Tools from "./Tools";
import Footer from "./Footer";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>

      <div data-aos="zoom-in" className="flex flex-col items-center justify-center min-heigh-full my-20 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center">
              <div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="object-cover w-full h-auto md:h-80"
                />
              </div>
            <div className="w-full md:w-1/2 pl-8">
              <div>
                <h1 className= "text-3xl font-bold md:text-9xl uppercase mt-8 md:mt-10 text-red-700">Hola!</h1>
                <h2 className= {`text-3xl md:text-6xl  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>Soy Jesús </h2>
                <p className= {`mt-4  ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
                  Soy un desarrollador web frontend con interés por la tecnología y las herramientas digitales.
                  Disfruto el trabajo en equipo y me adapto a las necesidades y requerimientos de cada cliente. Mi objetivo profesional es seguir aprendiendo y crecer profesionalmente como desarrollador web, aportando valor y satisfacción en cada proyecto que realizo.
                  Podrás conocer algunos más de mis proyectos por aquí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tools />

      <Footer/>
    </div>
  );
};

export default About;
