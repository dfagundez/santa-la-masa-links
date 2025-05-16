import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { links, iconComponents, type IconName } from './config/links';
import { theme } from './config/theme';
import RetailCatalog from './pages/RetailCatalog';
import WholesaleCatalog from './pages/WholesaleCatalog';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import features from './config/features';
import { IconBaseProps } from 'react-icons';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import ProgressBar from './components/ProgressBar';
import NProgress from 'nprogress';
import { useEffect } from 'react';

interface LinkButtonProps {
  href: string;
  icon: IconName;
  children: React.ReactNode;
}

const LinkButton = ({ href, icon, children }: LinkButtonProps) => {
  // Utilizar el tipo correcto para componentes de react-icons
  const IconComponent = iconComponents[icon];

  // Crear propiedades de icono con tipado seguro
  const iconProps: IconBaseProps & { className?: string } = {
    className: 'text-xl',
  };

  // Determinar si es una ruta interna o externa
  const isInternalLink = href.startsWith('/');

  if (isInternalLink) {
    return (
      <Link
        to={href}
        className="btn-primary w-full text-center block flex items-center justify-center gap-2"
      >
        <IconComponent {...iconProps} />
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary w-full text-center block flex items-center justify-center gap-2"
    >
      <IconComponent {...iconProps} />
      <span>{children}</span>
    </a>
  );
};

const HomePage = () => {
  return (
    <PageTransition>
      <div
        className="min-h-screen py-8 px-4"
        style={{
          backgroundImage: `${theme.background.overlay}, ${theme.background.texture}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <img
              src="/isologo.png"
              alt="Santa La Masa logo"
              className="w-24 h-24 object-contain"
            />

            {/* Título */}
            <h1 className="text-4xl text-budin font-cormorant font-medium tracking-wide">
              Santa La Masa
            </h1>

            {/* Subtítulo */}
            <div className="text-center text-gris space-y-2">
              <p className="text-base">
                Budines caseros riquísimos
              </p>
              <p className="text-base">
                Mirá el catálogo y escribinos por WhatsApp 👇
              </p>
            </div>

            {/* Secciones de enlaces */}
            <div className="w-full space-y-8">
              {links.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h2 className="text-xl text-budin font-cormorant text-center">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <LinkButton
                        key={link.title}
                        href={link.url}
                        icon={link.icon}
                      >
                        {link.title}
                      </LinkButton>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="mt-10 text-xs text-budin italic">
              Hecho con masa, tiempo y amor 💛
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// Componente para manejar las transiciones de ruta
const AnimatedRoutes = () => {
  const location = useLocation();

  // Efecto para manejar la barra de progreso en cambios de ruta
  useEffect(() => {
    // Iniciar la barra cuando cambia la ruta
    NProgress.start();
    
    // Forzar un pequeño delay para asegurar que la barra se complete
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.remove();
    };
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo-minorista" element={
            <PageTransition>
              <RetailCatalog />
            </PageTransition>
          } />
          <Route path="/catalogo-mayorista" element={
            <PageTransition>
              <WholesaleCatalog />
            </PageTransition>
          } />
          {features.cartEnabled && (
            <Route path="/carrito" element={
              <PageTransition>
                <Cart />
              </PageTransition>
            } />
          )}
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
