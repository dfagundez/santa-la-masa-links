# Santa La Masa - Links

Landing page tipo Linktree para Santa La Masa, una marca artesanal de budines y focaccias.

## 🚀 Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- React Icons

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/santa-la-masa-links.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Personalización

1. Actualiza los enlaces en `src/App.tsx`
2. Modifica los colores en `tailwind.config.js`
3. Ajusta los estilos en `src/index.css` y `src/App.css`

## 🌈 Paleta de Colores

- Masa clara: #F6F0E7
- Vainilla cremosa: #F3D8A5
- Marrón budín: #8B5E3C
- Verde romero: #A6BAA3
- Gris suave: #5F5F5F

## 📝 Licencia

MIT

# Santa La Masa - Tienda Online

Catálogo de productos de pastelería artesanal con opciones minoristas y mayoristas.

## Configuración de Cloudinary para imágenes

Este proyecto utiliza [Cloudinary](https://cloudinary.com/) para manejar las imágenes de los productos. Para configurarlo:

1. **Crear una cuenta en Cloudinary**:

   - Regístrate en [cloudinary.com](https://cloudinary.com/) (el plan gratuito es suficiente)
   - Obtén tu "Cloud Name" desde el dashboard

2. **Configura tu Cloud Name**:

   - Abre el archivo `src/utils/cloudinary.ts`
   - Reemplaza `'tu-cloud-name'` con tu Cloud Name real

3. **Estructura de carpetas en Cloudinary**:

   - Crea una carpeta principal llamada `santa-la-masa`
   - Dentro de ella, crea una subcarpeta llamada `products`
   - Sube tus imágenes usando el ID del producto como nombre:
     - Ejemplo: `budin-vainilla.jpg`, `budin-chocolate.jpg`, etc.

4. **Nombramiento de archivos**:
   - Usa el mismo ID que está en `products.ts` + la extensión (.jpg, .png, etc.)
   - Ejemplo: para el producto con ID `budin-vainilla`, la imagen debe llamarse `budin-vainilla.jpg`

## Cómo funciona el manejo de imágenes

- El sistema automáticamente buscará imágenes en Cloudinary basadas en el ID del producto
- Si una imagen existe en Cloudinary, se usará esa imagen optimizada
- Si no existe, se usará automáticamente un placeholder generado

## Plan gratuito de Cloudinary

El plan gratuito de Cloudinary incluye:

- 25 GB de almacenamiento
- 25 GB de ancho de banda mensual
- Funciones de transformación básicas (redimensionamiento, recorte, etc.)
- Perfecto para sitios pequeños-medianos

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```
