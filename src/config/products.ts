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
    description: 'Budín artesanal de vainilla de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-marmolado',
    name: 'Budín Marmolado',
    description: 'Budín artesanal marmolado de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Marmolado',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-naranja',
    name: 'Budín de Naranja con Glaseado',
    description: 'Budín artesanal de naranja con glaseado de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Naranja',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-limon',
    name: 'Budín de Limón con Glaseado',
    description: 'Budín artesanal de limón con glaseado de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Limón',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-vainilla-chips',
    name: 'Budín de Vainilla con Chips de Chocolate',
    description: 'Budín artesanal de vainilla con chips de chocolate de 400gr',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Chips',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-banana',
    name: 'Budín de Banana',
    description: 'Budín artesanal de banana de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-banana-nueces',
    name: 'Budín de Banana con Nueces y Chocolate',
    description:
      'Budín artesanal de banana con nueces y chips de chocolate de 400gr',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Nueces',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-zanahoria',
    name: 'Budín de Zanahoria con Nueces y Frosting',
    description: 'Budín artesanal de zanahoria con nueces y frosting de 400gr',
    price: 4500,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Zanahoria',
    category: 'minorista',
    weight: '400gr',
  },
  {
    id: 'budin-chocolate',
    name: 'Budín de Chocolate con Chips',
    description: 'Budín artesanal de chocolate con chips de chocolate de 400gr',
    price: 4000,
    image: 'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate',
    category: 'minorista',
    weight: '400gr',
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
      'Budín artesanal de vainilla de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-marmolado-mayor',
    name: 'Budín Marmolado (Mayorista)',
    description:
      'Budín artesanal marmolado de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Marmolado+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-naranja-mayor',
    name: 'Budín de Naranja con Glaseado (Mayorista)',
    description:
      'Budín artesanal de naranja con glaseado de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Naranja+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-limon-mayor',
    name: 'Budín de Limón con Glaseado (Mayorista)',
    description:
      'Budín artesanal de limón con glaseado de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Limón+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-vainilla-chips-mayor',
    name: 'Budín de Vainilla con Chips (Mayorista)',
    description:
      'Budín artesanal de vainilla con chips de chocolate de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Vainilla+Chips+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-banana-mayor',
    name: 'Budín de Banana (Mayorista)',
    description:
      'Budín artesanal de banana de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-banana-nueces-mayor',
    name: 'Budín de Banana con Nueces (Mayorista)',
    description:
      'Budín artesanal de banana con nueces y chips de chocolate de 400gr - Pedido mínimo: 3 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Banana+Nueces+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4500,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-zanahoria-mayor',
    name: 'Budín de Zanahoria con Nueces (Mayorista)',
    description:
      'Budín artesanal de zanahoria con nueces y frosting de 400gr - Pedido mínimo: 3 unidades',
    price: 4500,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Zanahoria+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4500,
      minQuantity: 3,
    },
  },
  {
    id: 'budin-chocolate-mayor',
    name: 'Budín de Chocolate con Chips (Mayorista)',
    description:
      'Budín artesanal de chocolate con chips de chocolate de 400gr - Pedido mínimo: 3 unidades',
    price: 4000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Budín+Chocolate+Mayorista',
    category: 'mayorista',
    weight: '400gr',
    wholesalePrice: {
      unit: 4000,
      minQuantity: 3,
    },
  },

  // FOCACCIAS MAYORISTAS
  {
    id: 'focaccia-clasica-mayor',
    name: 'Focaccia Clásica (Mayorista)',
    description:
      'Focaccia artesanal completa con romero y sal gruesa - Aproximadamente 1kg',
    price: 6000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Clásica+Mayorista',
    category: 'mayorista',
    weight: '1kg aprox',
    wholesalePrice: {
      unit: 6000,
    },
  },
  {
    id: 'focaccia-olivas-mayor',
    name: 'Focaccia de Olivas (Mayorista)',
    description:
      'Focaccia artesanal completa con olivas, romero, sal y aceitunas verdes - Aproximadamente 1kg',
    price: 6000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Olivas+Mayorista',
    category: 'mayorista',
    weight: '1kg aprox',
    wholesalePrice: {
      unit: 6000,
    },
  },
  {
    id: 'focaccia-ajo-mayor',
    name: 'Focaccia de Ajo (Mayorista)',
    description:
      'Focaccia artesanal completa con ajo, romero y sal gruesa - Aproximadamente 1kg',
    price: 6000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Ajo+Mayorista',
    category: 'mayorista',
    weight: '1kg aprox',
    wholesalePrice: {
      unit: 6000,
    },
  },
  {
    id: 'focaccia-cherry-mayor',
    name: 'Focaccia Cherry (Mayorista)',
    description:
      'Focaccia artesanal completa con tomates cherry, ajo y sal - Aproximadamente 1kg',
    price: 6000,
    image:
      'https://placehold.co/600x400/F3D8A5/8B5E3C?text=Focaccia+Cherry+Mayorista',
    category: 'mayorista',
    weight: '1kg aprox',
    wholesalePrice: {
      unit: 6000,
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
