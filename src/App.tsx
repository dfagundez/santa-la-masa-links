import './App.css'
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { MdEmail, MdShoppingBag, MdStorefront } from 'react-icons/md'

interface LinkButtonProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}

const LinkButton = ({ href, icon, children }: LinkButtonProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary w-full text-center block flex items-center justify-center gap-2"
  >
    {icon}
    <span>{children}</span>
  </a>
)

function App() {
  return (
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

        {/* Botones de enlaces */}
        <div className="w-full space-y-4">
          {/* Catálogos */}
          <div className="space-y-3">
            <h2 className="text-xl text-budin font-cormorant text-center">Nuestros Productos</h2>
            <LinkButton 
              href="/catalogo-minorista"
              icon={<MdShoppingBag className="text-xl" />}
            >
              Catálogo Minorista
            </LinkButton>
            <LinkButton 
              href="/catalogo-mayorista"
              icon={<MdStorefront className="text-xl" />}
            >
              Catálogo Mayorista
            </LinkButton>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-3">
            <h2 className="text-xl text-budin font-cormorant text-center">Síguenos en Redes</h2>
            <LinkButton 
              href="https://instagram.com/santalamasa"
              icon={<FaInstagram className="text-xl" />}
            >
              Instagram
            </LinkButton>
            <LinkButton 
              href="https://tiktok.com/@santalamasa"
              icon={<FaTiktok className="text-xl" />}
            >
              TikTok
            </LinkButton>
            <LinkButton 
              href="https://facebook.com/santalamasa"
              icon={<FaFacebook className="text-xl" />}
            >
              Facebook
            </LinkButton>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h2 className="text-xl text-budin font-cormorant text-center">Contacto</h2>
            <LinkButton 
              href="https://wa.me/1234567890"
              icon={<FaWhatsapp className="text-xl" />}
            >
              Pedidos por WhatsApp
            </LinkButton>
            <LinkButton 
              href="mailto:contacto@santalamasa.com"
              icon={<MdEmail className="text-xl" />}
            >
              Contacto por Email
            </LinkButton>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-budin italic">
          Hecho con masa, tiempo y amor 💛
        </p>
      </div>
    </div>
  )
}

export default App
