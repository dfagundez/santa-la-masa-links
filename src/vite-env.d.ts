/// <reference types="vite/client" />

// Importar los tipos de React
declare module 'react';
declare module 'react-dom';
declare module 'react-router-dom';
declare module 'react-icons/md';
declare module 'react-icons/fa';

// Tipos para propiedades con nombres personalizados que usan Tailwind
interface Window {
  workbox: any;
}

declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}
