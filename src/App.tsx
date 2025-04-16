import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { links, iconComponents, type IconName } from './config/links'
import { theme } from './config/theme'
import RetailCatalog from './pages/RetailCatalog'
import WholesaleCatalog from './pages/WholesaleCatalog'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import features from './config/features'

interface LinkButtonProps {
  href: string;
  icon: IconName;
  children: React.ReactNode;
}

const LinkButton = ({ href, icon, children }: LinkButtonProps) => {
  const IconComponent = iconComponents[icon];
  
  // Determinar si es una ruta interna o externa
  const isInternalLink = href.startsWith('/');
  
  if (isInternalLink) {
    return (
      <Link 
        to={href}
        className="btn-primary w-full text-center block flex items-center justify-center gap-2"
      >
        <IconComponent className="text-xl" />
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
      <IconComponent className="text-xl" />
      <span>{children}</span>
    </a>
  );
}

const HomePage = () => {
  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        backgroundImage: `${theme.background.overlay}, ${theme.background.texture}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
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
          <p className="text-center text-gris">
            Budines y focaccias artesanales hechos con amor
          </p>

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
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo-minorista" element={<RetailCatalog />} />
          <Route path="/catalogo-mayorista" element={<WholesaleCatalog />} />
          {features.cartEnabled && <Route path="/carrito" element={<Cart />} />}
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
