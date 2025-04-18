export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'minorista' | 'mayorista';
  weight?: string;
  wholesalePrice?: {
    unit: number;
    minQuantity?: number;
  };
}

export const products: Product[] = [
  // BUDINES MINORISTAS
  {
    id: 'budin-vainilla',
    name: 'Budín de Vainilla',
    description: 'Budín artesanal de vainilla de 375-450gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-marmolado',
    name: 'Budín Marmolado',
    description: 'Budín artesanal marmolado de 375-450gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Marmolado',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-naranja',
    name: 'Budín de Naranja con Glaseado',
    description: 'Budín artesanal de naranja con glaseado de 375-450gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Naranja',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-limon',
    name: 'Budín de Limón con Glaseado',
    description: 'Budín artesanal de limón con glaseado de 375-450gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Limón',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-vainilla-chips',
    name: 'Budín de Vainilla con Chips de Chocolate',
    description:
      'Budín artesanal de vainilla con chips de chocolate de 375-450gr',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Chips',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-banana',
    name: 'Budín de Banana',
    description: 'Budín artesanal de banana de 375-450gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-banana-nueces',
    name: 'Budín de Banana con Nueces y Chocolate',
    description:
      'Budín artesanal de banana con nueces y chips de chocolate de 375-450gr',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Nueces',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-zanahoria',
    name: 'Budín de Zanahoria con Nueces y Frosting',
    description:
      'Budín artesanal de zanahoria con nueces y frosting de 375-450gr',
    price: 4500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Zanahoria',
    category: 'minorista',
    weight: '375-450gr',
  },
  {
    id: 'budin-chocolate',
    name: 'Budín de Chocolate con Chips',
    description:
      'Budín artesanal de chocolate con chips de chocolate de 375-450gr',
    price: 4500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate',
    category: 'minorista',
    weight: '375-450gr',
  },

  // FOCACCIAS MINORISTAS
  {
    id: 'focaccia-clasica',
    name: 'Focaccia Clásica',
    description: 'Focaccia artesanal con romero y sal gruesa de 200gr',
    price: 1500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Clásica',
    category: 'minorista',
    weight: '200gr',
  },
  {
    id: 'focaccia-olivas',
    name: 'Focaccia de Olivas',
    description:
      'Focaccia artesanal con olivas, romero, sal y aceitunas verdes de 200gr',
    price: 1500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Olivas',
    category: 'minorista',
    weight: '200gr',
  },
  {
    id: 'focaccia-ajo',
    name: 'Focaccia de Ajo',
    description: 'Focaccia artesanal con ajo, romero y sal gruesa de 200gr',
    price: 1500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Ajo',
    category: 'minorista',
    weight: '200gr',
  },
  {
    id: 'focaccia-cherry',
    name: 'Focaccia Cherry',
    description: 'Focaccia artesanal con tomates cherry, ajo y sal de 200gr',
    price: 1500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Cherry',
    category: 'minorista',
    weight: '200gr',
  },

  // PRODUCTOS MAYORISTAS
  // BUDINES MAYORISTAS
  {
    id: 'budin-vainilla-mayor',
    name: 'Budín de Vainilla (Mayorista)',
    description:
      'Budín artesanal de vainilla de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2500,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-marmolado-mayor',
    name: 'Budín Marmolado (Mayorista)',
    description:
      'Budín artesanal marmolado de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Marmolado+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2500,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-naranja-mayor',
    name: 'Budín de Naranja con Glaseado (Mayorista)',
    description:
      'Budín artesanal de naranja con glaseado de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Naranja+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2500,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-limon-mayor',
    name: 'Budín de Limón con Glaseado (Mayorista)',
    description:
      'Budín artesanal de limón con glaseado de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Limón+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2500,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-vainilla-chips-mayor',
    name: 'Budín de Vainilla con Chips (Mayorista)',
    description:
      'Budín artesanal de vainilla con chips de chocolate de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Chips+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2900,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-banana-mayor',
    name: 'Budín de Banana (Mayorista)',
    description:
      'Budín artesanal de banana de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2500,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-banana-nueces-mayor',
    name: 'Budín de Banana con Nueces (Mayorista)',
    description:
      'Budín artesanal de banana con nueces y chips de chocolate de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Nueces+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2900,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-zanahoria-mayor',
    name: 'Budín de Zanahoria con Nueces (Mayorista)',
    description:
      'Budín artesanal de zanahoria con nueces y frosting de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Zanahoria+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2900,
      minQuantity: 4,
    },
  },
  {
    id: 'budin-chocolate-mayor',
    name: 'Budín de Chocolate con Chips (Mayorista)',
    description:
      'Budín artesanal de chocolate con chips de chocolate de 375-450gr - Pedido mínimo: 4 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate+Mayorista',
    category: 'mayorista',
    weight: '375-450gr',
    wholesalePrice: {
      unit: 2900,
      minQuantity: 4,
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
