import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en.json'
import es from './i18n/es.json'

i18next.use(initReactI18next).init({
  lng:'es',

  resources: {
    en: {
      translation: en 
    },
    es: {
      translation: es
    },
  },
  fallbackLng: 'es', // Lenguaje por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
