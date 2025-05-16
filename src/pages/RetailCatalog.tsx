import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdShoppingCart, MdAdd, MdRemove } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { getRetailProducts } from '../config/products';
import { useCart } from '../context/CartContext';
import features from '../config/features';
import ProductImage from '../components/ProductImage';

// Eliminar el tipo FC y usar un tipo explícito para definir cantidades
type QuantityRecord = Record<string, number>;

const RetailCatalog = () => {
  const products = getRetailProducts();
  const { addToCart, getTotalItems } = useCart();

  // Estado para manejar las cantidades de cada producto
  // @ts-ignore - ignorar error de genéricos
  const [quantities, setQuantities] = useState(
    // Inicializar con 1 para cada producto
    products.reduce(
      (acc: QuantityRecord, product) => ({ ...acc, [product.id]: 1 }),
      {}
    )
  );

  // Función para incrementar la cantidad
  const incrementQuantity = (productId: string) => {
    setQuantities((prev: QuantityRecord) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  // Función para decrementar la cantidad
  const decrementQuantity = (productId: string) => {
    setQuantities((prev: QuantityRecord) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1),
    }));
  };

  // Función para agregar al carrito
  const handleAddToCart = (productId: string) => {
    if (!features.cartEnabled) return; // No hacer nada si el carrito está desactivado

    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(product, quantities[productId] || 1);
      // Opcional: resetear la cantidad a 1 después de agregar al carrito
      setQuantities((prev: QuantityRecord) => ({
        ...prev,
        [productId]: 1,
      }));
    }
  };

  // Función para crear enlace de WhatsApp para un producto
  const createWhatsAppLink = (product: any, quantity: number) => {
    const message = encodeURIComponent(
      `Hola! Me interesa comprar ${quantity} unidad(es) de ${product.name}. ¿Podrían informarme sobre disponibilidad y formas de pago? Gracias!`
    );
    return `https://wa.me/+5491127785821?text=${message}`;
  };

  // Función para determinar si el producto es un budín
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
          {/* Navegación superior */}
          <div className="w-full flex justify-between items-center mb-4">
            {/* Botón Volver */}
            <Link
              to="/"
              className="flex items-center gap-2 text-budin hover:text-romero transition-colors duration-300"
            >
              <MdArrowBack className="text-xl" />
              <span className="font-poppins">Volver a los links</span>
            </Link>

            {/* Botón ir al carrito - solo se muestra si el carrito está habilitado */}
            {features.cartEnabled && (
              <Link
                to="/carrito"
                className="flex items-center gap-2 bg-romero text-white px-4 py-2 rounded-md hover:bg-budin transition-colors duration-300"
              >
                <MdShoppingCart className="text-xl" />
                <span className="font-poppins">
                  Ver Carrito
                  {getTotalItems() > 0 && (
                    <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-budin rounded-full">
                      {getTotalItems()}
                    </span>
                  )}
                </span>
              </Link>
            )}
          </div>

          {/* Logo */}
          <img
            src="/isologo.png"
            alt="Santa La Masa logo"
            className="w-24 h-24 object-contain"
          />

          {/* Título */}
          <h1 className="text-4xl text-budin font-cormorant font-medium tracking-wide">
            Catálogo Minorista
          </h1>

          {/* Subtítulo */}
          <p className="text-center text-gris">
            Productos artesanales hechos con amor y tradición
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
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-budin">
                      ${product.price.toLocaleString('es-AR')}
                    </span>
                    <span className="text-sm text-gris font-poppins">
                      {product.weight}
                    </span>
                  </div>

                  {/* Etiqueta destacada para la categoría */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-md ${
                        isBudin(product.id)
                          ? 'bg-vainilla text-budin'
                          : 'bg-romero bg-opacity-20 text-romero'
                      }`}
                    >
                      {isBudin(product.id) ? 'Budín' : 'Focaccia'}
                    </span>
                  </div>

                  {/* Control de cantidad y botón Agregar - solo si está habilitado el carrito */}
                  {features.cartEnabled ? (
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center border border-vainilla rounded-md">
                        <button
                          onClick={() => decrementQuantity(product.id)}
                          className="px-2 py-1 text-budin hover:text-romero"
                        >
                          <MdRemove />
                        </button>
                        <span className="px-3 py-1 font-medium">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() => incrementQuantity(product.id)}
                          className="px-2 py-1 text-budin hover:text-romero"
                        >
                          <MdAdd />
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="bg-romero text-white px-3 py-2 rounded-md hover:bg-budin transition-colors duration-300 font-poppins flex items-center gap-1"
                      >
                        <MdShoppingCart className="text-lg" />
                        <span>Agregar</span>
                      </button>
                    </div>
                  ) : (
                    <div className="mb-3"></div> // Espacio de margen para mantener consistencia visual
                  )}

                  {/* Botón para pedir por WhatsApp - Siempre visible */}
                  <a
                    href={createWhatsAppLink(
                      product,
                      features.cartEnabled ? quantities[product.id] || 1 : 1
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 font-poppins flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Pedir por WhatsApp</span>
                  </a>
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

export default RetailCatalog;
