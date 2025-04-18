import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { getWholesaleProducts } from '../config/products';
import ProductImage from '../components/ProductImage';

const WholesaleCatalog = () => {
  const products = getWholesaleProducts();

  // Función para crear enlace de WhatsApp para solicitar cotización mayorista
  const createWholesaleWhatsAppLink = (product: any) => {
    const message = encodeURIComponent(
      `Hola! Soy un cliente mayorista y me interesa recibir una cotización para ${product.name}. ¿Podrías darme más información sobre precios y disponibilidad? Gracias!`
    );
    return `https://wa.me/+5491154793903?text=${message}`;
  };

  // Función para determinar si el producto es un budín (requiere mínimo)
  const isBudin = (productId: string) => {
    return productId.includes('budin');
  };

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          'linear-gradient(rgba(246, 240, 231, 0.9), rgba(246, 240, 231, 0.9)), url("/texture-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Botón Volver */}
          <Link
            to="/"
            className="self-start flex items-center gap-2 text-budin hover:text-romero transition-colors duration-300 mb-4"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-poppins">Volver a los links</span>
          </Link>

          {/* Logo */}
          <img
            src="/isologo.png"
            alt="Santa La Masa logo"
            className="w-24 h-24 object-contain"
          />

          {/* Título */}
          <h1 className="text-4xl text-budin font-cormorant font-medium tracking-wide">
            Catálogo Mayorista
          </h1>

          {/* Subtítulo */}
          <p className="text-center text-gris">
            Productos artesanales para tu negocio
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {/* Product Cards */}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-masa-clara rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-vainilla"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-48 bg-vainilla flex items-center justify-center">
                    <ProductImage
                      productId={product.id}
                      name={product.name}
                      cloudinaryUrl={product.cloudinaryUrl}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-budin font-playfair mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gris mb-4 font-poppins">
                    {product.description}
                  </p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gris font-poppins">
                        Precio:
                      </span>
                      <span className="text-lg font-bold text-budin">
                        ${product.wholesalePrice?.unit.toLocaleString('es-AR')}
                      </span>
                    </div>

                    {/* Información de peso */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gris font-poppins">
                        Peso:
                      </span>
                      <span className="text-md font-medium text-budin">
                        {product.weight}
                      </span>
                    </div>

                    {/* Para budines, mostrar el pedido mínimo */}
                    {isBudin(product.id) && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gris font-poppins">
                          Pedido mínimo:
                        </span>
                        <span className="text-md font-medium text-budin">
                          {product.wholesalePrice?.minQuantity} unidades
                        </span>
                      </div>
                    )}

                    {/* Para focaccias, mostrar que se vende por unidad entera */}
                    {!isBudin(product.id) && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gris font-poppins">
                          Presentación:
                        </span>
                        <span className="text-md font-medium text-budin">
                          Focaccia completa
                        </span>
                      </div>
                    )}

                    <a
                      href={createWholesaleWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 mt-2 font-poppins flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>Solicitar Cotización</span>
                    </a>
                  </div>
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
  );
};

export default WholesaleCatalog;
