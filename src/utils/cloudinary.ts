// Reemplaza esto con tu cloud name de Cloudinary
const CLOUD_NAME = 'tu-cloud-name';

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
    quality?: number;
  } = {}
): string {
  const { width, height, crop = 'fill', quality = 'auto' } = options;

  let transformations = 'f_auto,q_auto';

  if (width) transformations += `,w_${width}`;
  if (height) transformations += `,h_${height}`;
  if (crop) transformations += `,c_${crop}`;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/santa-la-masa/${publicId}`;
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
