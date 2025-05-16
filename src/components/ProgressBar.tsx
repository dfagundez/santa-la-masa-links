import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configuración de NProgress
NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  speed: 300,
  trickle: true,
  trickleSpeed: 200,
});

// Estilos personalizados
const styles = `
  #nprogress .bar {
    background: #8B5E3C !important;
    height: 3px !important;
  }
  #nprogress .peg {
    display: none !important;
  }
`;

const ProgressBar = () => {
  useEffect(() => {
    // Agregar los estilos personalizados
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return null;
};

export default ProgressBar; 