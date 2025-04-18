import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdArrowBack,
  MdRemoveShoppingCart,
  MdDelete,
  MdAdd,
  MdRemove,
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotal } =
    useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // Función para formatear el precio
  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR');
  };

  // Función para enviar pedido por WhatsApp
  const handleSendOrder = () => {
    // Si no hay items en el carrito, no hacer nada
    if (cartItems.length === 0) return;

    // Construir el mensaje con los detalles del pedido
    let message = `*Nuevo Pedido de ${name || 'Cliente'}*\n\n`;
    message += `*Productos:*\n`;

    cartItems.forEach((item) => {
      message += `▪️ ${item.quantity}x ${item.product.name} - $${formatPrice(
        item.product.price * item.quantity
      )}\n`;
    });

    message += `\n*Total:* $${formatPrice(getTotal())}\n\n`;

    if (address) {
      message += `*Dirección de entrega:*\n${address}\n\n`;
    }

    message += `Hola! Te envío mi pedido para que me confirmes disponibilidad y coordinar la entrega. Gracias!`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Abrir WhatsApp con el mensaje predefinido
    // Reemplazar NUMERO_DE_TELEFONO con el número real de WhatsApp
    window.open(
      `https://wa.me/+5491154793903?text=${encodedMessage}`,
      '_blank'
    );
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
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Botón Volver */}
          <Link
            to="/catalogo-minorista"
            className="self-start flex items-center gap-2 text-budin hover:text-romero transition-colors duration-300 mb-4"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-poppins">Volver al catálogo</span>
          </Link>

          {/* Título */}
          <h1 className="text-3xl text-budin font-cormorant font-medium tracking-wide text-center">
            Tu Carrito
          </h1>

          {/* Contenido del carrito */}
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <MdRemoveShoppingCart className="mx-auto text-4xl text-budin opacity-40 mb-4" />
              <p className="text-gris mb-4">Tu carrito está vacío</p>
              <Link
                to="/catalogo-minorista"
                className="bg-romero text-white px-6 py-3 rounded-md hover:bg-budin transition-colors duration-300 font-poppins inline-block"
              >
                Ver Productos
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-vainilla">
              {/* Lista de productos en el carrito */}
              <div className="divide-y divide-vainilla">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
                  >
                    <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-md font-semibold text-budin font-playfair">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gris">
                          ${formatPrice(item.product.price)} por unidad
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 self-end sm:self-auto">
                      {/* Control de cantidad */}
                      <div className="flex items-center border border-vainilla rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2 py-1 text-budin hover:text-romero"
                        >
                          <MdRemove />
                        </button>
                        <span className="px-3 py-1 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-budin hover:text-romero"
                        >
                          <MdAdd />
                        </button>
                      </div>

                      {/* Precio total del ítem */}
                      <span className="font-semibold text-budin w-20 text-right">
                        ${formatPrice(item.product.price * item.quantity)}
                      </span>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gris hover:text-romero transition-colors"
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumen del pedido */}
              <div className="mt-6 border-t border-vainilla pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-poppins">Total:</span>
                  <span className="text-xl font-bold text-budin">
                    ${formatPrice(getTotal())}
                  </span>
                </div>

                {/* Formulario para datos de envío */}
                <div className="mb-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-budin mb-1"
                    >
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-vainilla rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-romero"
                      placeholder="¿Cómo te llamas?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-budin mb-1"
                    >
                      Dirección de entrega (opcional)
                    </label>
                    <textarea
                      id="address"
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full border border-vainilla rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-romero"
                      placeholder="¿Dónde te lo enviamos?"
                    />
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={clearCart}
                    className="text-sm text-gris hover:text-romero transition-colors flex items-center gap-1"
                  >
                    <MdRemoveShoppingCart className="text-lg" />
                    <span>Vaciar carrito</span>
                  </button>

                  <button
                    onClick={handleSendOrder}
                    className="w-full sm:w-auto bg-romero text-white px-6 py-3 rounded-md hover:bg-budin transition-colors duration-300 font-poppins flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Enviar pedido por WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <p className="mt-10 text-xs text-budin italic text-center">
            Hecho con masa, tiempo y amor 💛
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
