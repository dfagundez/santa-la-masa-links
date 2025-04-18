import React from 'react';

interface ProductImageProps {
  productId: string;
  name: string;
  cloudinaryUrl?: string;
  width?: number;
  height?: number;
}

const ProductImage = ({
  productId,
  name,
  cloudinaryUrl,
  width = 600,
  height = 400,
}: ProductImageProps): JSX.Element => {
  // Si hay una URL de Cloudinary, la usamos
  if (cloudinaryUrl) {
    return (
      <img
        src={cloudinaryUrl}
        alt={name}
        className="w-full h-auto rounded-md object-cover"
        loading="lazy"
      />
    );
  }

  // Si no hay imagen, usamos un placeholder
  const placeholderText = name.replace(/\s+/g, '+');
  return (
    <img
      src={`https://placehold.co/${width}x${height}/F3D8A5/8B5E3C?text=${placeholderText}`}
      alt={name}
      className="w-full h-auto rounded-md object-cover"
      loading="lazy"
    />
  );
};

export default ProductImage;
