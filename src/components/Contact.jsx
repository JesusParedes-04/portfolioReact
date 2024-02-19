import Footer from './Footer';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    const emailSubject = `Nuevo mensaje de ${firstName} ${lastName}`;
    const emailBody = `${message}\n\nDatos de contacto:\nEmail: ${email}`;
    const emailLink = `mailto:jesusparedes.dev@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(emailLink);
  };

  return (

    <div data-aos="flip-left" className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex-grow">
        <h1 className={`text-3xl md:text-6xl text-center mt-8 md:mt-14 mb-5 md:mb-12 font-montserrat uppercase font-bold whitespace-pre-line ${isDarkMode ? " text-slate-50" : " text-slate-800"}`}>
          {t('form-title')}<br /> {t('form-br')}
        </h1>


        <form onSubmit={handleSubmit} className={`max-w-md mx-auto p-4 rounded-md mb-12 ${isDarkMode ? "bg-slate-100" : " bg-slate-800"}`}>
          <div className="mb-4">
            <label htmlFor="firstName" className={`block mb-1 font-semibold ${isDarkMode ? " text-gray-800" : "text-slate-100"}`}>{t('name')}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className={` block mb-1 font-semibold  ${isDarkMode ? " text-gray-800" : "text-slate-100"}`}>{t('surname')}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block mb-1 font-semibold ${isDarkMode ? " text-gray-800" : "text-slate-100"}`}>{t('email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`block mb-1 font-semibold ${isDarkMode ? " text-gray-800" : "text-slate-100"}`}>{t('message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className='text-center'>
            <button type="submit" className={` font-semibold py-2 px-4 rounded ${isDarkMode ? " bg-slate-800 text-slate-100" : " bg-slate-100 text-gray-800"}`} >
              {t('send-mail')}
            </button>
          </div>
        </form>
        </div>

        {/* Sección de iconos de redes sociales con grid */}
        <div className="grid grid-cols-4 gap-4 mt-8">

          {/* iconos de redes sociales */}
       
          <div className="text-center">
            <a href="#" className="text-blue-500">
              <i className="FaInstagram"></i>
            </a>
          </div>
          <div className="text-center">
            <a href="#" className="text-blue-500">
              <i className="FaLinkedin"></i>
            </a>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default Contact;
