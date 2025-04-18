export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  cloudinaryUrl?: string;
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-vainilla-clasico_wmcf1p.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-limon-con-glaseado_sdukjk.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-vainilla-con-chip_pb1vox.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012476/budin-banana-con-nueces_cwrg1d.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012476/budin-chocolate-con-chips_efnkjv.png',
    category: 'minorista',
    weight: '375-450gr',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-vainilla-clasico_wmcf1p.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-limon-con-glaseado_sdukjk.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012477/budin-vainilla-con-chip_pb1vox.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012476/budin-banana-con-nueces_cwrg1d.png',
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
    cloudinaryUrl:
      'https://res.cloudinary.com/duuk30hnx/image/upload/v1745012476/budin-chocolate-con-chips_efnkjv.png',
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
