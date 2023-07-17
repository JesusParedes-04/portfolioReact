import  { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Recuperar el valor del modo oscuro del localStorage al cargar la página
    const savedIsDarkMode = localStorage.getItem('isDarkMode');

    if (savedIsDarkMode !== null) {
      setIsDarkMode(savedIsDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    // Guardar el valor del modo oscuro en el localStorage cuando cambie
    localStorage.setItem('isDarkMode', isDarkMode.toString());

    // Cambiar el color del fondo del body según el modo oscuro
    document.body.style.backgroundColor = isDarkMode ? '#1F2937' : '#F8FAFC';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
