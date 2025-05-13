import { Product } from '../config/products';

// Usar variables de entorno en lugar de valores hardcodeados
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;

if (!CLOUD_NAME || !BASE_URL) {
  throw new Error(
    'Cloudinary configuration is missing. Please check your .env file.'
  );
}

/**
 * Genera una URL optimizada de Cloudinary
 * @param publicId El ID público de la imagen en Cloudinary
 * @param options Opciones de transformación
 * @returns URL completa de Cloudinary
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'crop' | 'scale' | 'fit';
    quality?: number | 'auto';
  } = {}
): string {
  // Destructuramos solo lo que usamos
  const { width, height, crop = 'fill' } = options;

  let transformations = 'f_auto,q_auto'; // Calidad auto por defecto

  if (width) transformations += `,w_${width}`;
  if (height) transformations += `,h_${height}`;
  if (crop) transformations += `,c_${crop}`;
  // La calidad podría usarse así en el futuro si lo necesitas:
  // if (options.quality && options.quality !== 'auto') transformations += `,q_${options.quality}`;

  return `${BASE_URL}/${transformations}/santa-la-masa/${publicId}`;
}

/**
 * Genera un componente de imagen optimizado para un producto
 * @param productId ID del producto
 * @param extension Extensión del archivo (jpg, png, etc)
 * @returns URL completa a la imagen del producto en Cloudinary
 */
export function getProductImageUrl(
  productId: string,
  extension: string = 'jpg'
): string {
  return getCloudinaryUrl(`products/${productId}.${extension}`, {
    width: 600,
    height: 400,
    crop: 'fill',
  });
}

/**
 * Convierte las imágenes de placeholder a Cloudinary si existe la imagen
 * @param productId ID del producto para buscar en Cloudinary
 * @returns URL de Cloudinary o undefined si no existe
 */
export async function checkProductImageExists(
  productId: string
): Promise<string | undefined> {
  try {
    const response = await fetch(getProductImageUrl(productId), {
      method: 'HEAD',
    });

    if (response.ok) {
      return getProductImageUrl(productId);
    }

    return undefined;
  } catch (error) {
    console.error('Error checking product image:', error);
    return undefined;
  }
}

// Helper function to get the optimized image URL
export const getOptimizedImageUrl = (product: Product): string => {
  // If the product already has a cloudinaryUrl, use it
  if (product.cloudinaryUrl) {
    return product.cloudinaryUrl;
  }

  // Otherwise, use the placeholder image
  return product.image;
};

// Function to get the Cloudinary URL for a product
export const getCloudinaryUrlForProduct = (productId: string): string => {
  return `${BASE_URL}/v1745012477/${productId}.png`;
};

// Function to check if a product has a Cloudinary image
export const hasCloudinaryImage = (product: Product): boolean => {
  return !!product.cloudinaryUrl;
};
