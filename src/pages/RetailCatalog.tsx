import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { getRetailProducts } from '../config/products';

const RetailCatalog: React.FC = () => {
  const products = getRetailProducts();

  return (
    <div 
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(246, 240, 231, 0.9), rgba(246, 240, 231, 0.9)), url("/texture-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
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
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
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
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-budin">
                      ${product.price.toLocaleString('es-AR')}
                    </span>
                    <button className="bg-romero text-white px-4 py-2 rounded-md hover:bg-budin transition-colors duration-300 font-poppins">
                      Ver Detalles
                    </button>
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

export default RetailCatalog; 