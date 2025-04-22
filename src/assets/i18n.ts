import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // estose instala aparte

i18n
  .use(HttpBackend) // para cargar archivos JSON
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false, // pongo en true para ver info en consola
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // ruta a los archivos
    },
  });

export default i18n;
