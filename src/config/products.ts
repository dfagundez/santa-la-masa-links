export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'minorista' | 'mayorista';
  wholesalePrice?: {
    unit: number;
    box: number;
    boxQuantity: number;
  };
}

export const products: Product[] = [
  {
    id: 'budin-001',
    name: 'Budín de Vainilla',
    description: 'Budín artesanal de vainilla con glaseado de limón',
    price: 1200,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla',
    category: 'minorista',
  },
  {
    id: 'budin-002',
    name: 'Budín de Chocolate',
    description: 'Budín artesanal de chocolate con chips de chocolate',
    price: 1300,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate',
    category: 'minorista',
  },
  {
    id: 'focaccia-001',
    name: 'Focaccia Clásica',
    description: 'Focaccia artesanal con romero y sal marina',
    price: 1500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Clásica',
    category: 'minorista',
  },
  {
    id: 'focaccia-002',
    name: 'Focaccia de Olivas',
    description: 'Focaccia artesanal con aceitunas negras y verdes',
    price: 1600,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Olivas',
    category: 'minorista',
  },
  {
    id: 'budin-wholesale-001',
    name: 'Budín de Vainilla (Mayorista)',
    description: 'Budín artesanal de vainilla con glaseado de limón',
    price: 1000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Mayorista',
    category: 'mayorista',
    wholesalePrice: {
      unit: 1000,
      box: 10000,
      boxQuantity: 12,
    },
  },
  {
    id: 'budin-wholesale-002',
    name: 'Budín de Chocolate (Mayorista)',
    description: 'Budín artesanal de chocolate con chips de chocolate',
    price: 1100,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate+Mayorista',
    category: 'mayorista',
    wholesalePrice: {
      unit: 1100,
      box: 11000,
      boxQuantity: 12,
    },
  },
  {
    id: 'focaccia-wholesale-001',
    name: 'Focaccia Clásica (Mayorista)',
    description: 'Focaccia artesanal con romero y sal marina',
    price: 1300,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Clásica+Mayorista',
    category: 'mayorista',
    wholesalePrice: {
      unit: 1300,
      box: 13000,
      boxQuantity: 12,
    },
  },
  {
    id: 'focaccia-wholesale-002',
    name: 'Focaccia de Olivas (Mayorista)',
    description: 'Focaccia artesanal con aceitunas negras y verdes',
    price: 1400,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Olivas+Mayorista',
    category: 'mayorista',
    wholesalePrice: {
      unit: 1400,
      box: 14000,
      boxQuantity: 12,
    },
  },
];

// Funciones de utilidad para filtrar productos
export const getRetailProducts = () => {
  return products.filter((product) => product.category === 'minorista');
};

export const getWholesaleProducts = () => {
  return products.filter((product) => product.category === 'mayorista');
};
