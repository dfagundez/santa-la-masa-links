import { IconType } from 'react-icons';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdShoppingBag, MdStorefront } from 'react-icons/md';

export type IconName =
  | 'shopping'
  | 'store'
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'whatsapp'
  | 'email';

export interface Link {
  title: string;
  url: string;
  icon: IconName;
}

export interface LinkSection {
  title: string;
  links: Link[];
}

export const iconComponents: Record<IconName, IconType> = {
  shopping: MdShoppingBag,
  store: MdStorefront,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
  whatsapp: FaWhatsapp,
  email: MdEmail,
};

export const links: LinkSection[] = [
  {
    title: 'Nuestros Productos',
    links: [
      {
        title: 'Catálogo Minorista',
        url: '/catalogo-minorista',
        icon: 'shopping',
      },
      {
        title: 'Catálogo Mayorista',
        url: '/catalogo-mayorista',
        icon: 'store',
      },
    ],
  },
  {
    title: 'Síguenos en Redes',
    links: [
      {
        title: 'Instagram',
        url: 'https://instagram.com/santalamasa',
        icon: 'instagram',
      },
      {
        title: 'TikTok',
        url: 'https://tiktok.com/@santalamasa',
        icon: 'tiktok',
      },
      {
        title: 'Facebook',
        url: 'https://facebook.com/santalamasa',
        icon: 'facebook',
      },
    ],
  },
  {
    title: 'Contacto',
    links: [
      {
        title: 'Pedidos por WhatsApp',
        url: 'https://wa.me/5491127785821?text=Hola%20Santa%20La%20Masa!%20Quiero%20hacer%20un%20pedido%20🥖',
        icon: 'whatsapp',
      },
      {
        title: 'Contacto por Email',
        url: 'mailto:santalamasa@gmail.com',
        icon: 'email',
      },
    ],
  },
];
