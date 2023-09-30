import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
// styles
import styles from './NavItem.module.scss';

interface NavItemProps {
  title: string;
  path: string;
  id: number;
  img: StaticImageData;
  i: number;
  closeMobileMenu: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  path,
  id,
  img,
  i,
  closeMobileMenu,
}) => {
  return (
    <motion.li
      className={styles.nav_item}
      key={id}
      initial={{ opacity: 0, y: i % 2 === 0 ? -1000 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      onClick={closeMobileMenu}
    >
      <div className={styles.img}>
        <Image alt={title} src={img} fill priority />
      </div>
      <Link href={path}>
        <span className={styles.nav_link}>{title}</span>
      </Link>
    </motion.li>
  );
};

export default NavItem;
