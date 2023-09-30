import { StaticImageData } from 'next/image';
import Link1Img from '@/public/images/01.jpg';
import Link2Img from '@/public/images/02.jpg'; // Update with correct image paths
import Link3Img from '@/public/images/03.jpg';
import Link4Img from '@/public/images/04.jpg';
import Link5Img from '@/public/images/05.jpg';

interface NavItemProps {
  title: string;
  path: string;
  id: number;
  img: StaticImageData;
  i: number;
  closeMobileMenu: () => void;
}

export const navData: NavItemProps[] = [
  {
    title: 'home',
    path: '/',
    id: 1,
    img: Link1Img,
    i: 0, // Placeholder value for 'i'
    closeMobileMenu: () => {}, // Placeholder function for 'closeMobileMenu'
  },
  {
    title: 'e-sport',
    path: '/esport',
    id: 2,
    img: Link2Img,
    i: 1,
    closeMobileMenu: () => {},
  },
  {
    title: 'health',
    path: '/health',
    id: 3,
    img: Link3Img,
    i: 2,
    closeMobileMenu: () => {},
  },
  {
    title: 'tech',
    path: '/tech',
    id: 4,
    img: Link4Img,
    i: 3,
    closeMobileMenu: () => {},
  },
  {
    title: 'science',
    path: '/science',
    id: 5,
    img: Link5Img,
    i: 4,
    closeMobileMenu: () => {},
  },
];
