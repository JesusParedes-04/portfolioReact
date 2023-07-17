import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import MainNav from './components/MainNav';
import Home from './components/Home';
import About from './components/About';
import Proyects from './components/Proyects';
import Album from './components/Album';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/album" element={<Album />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
