import { motion, AnimatePresence, Variants } from 'framer-motion';

// styles
import styles from './MenuBtn.module.scss';

interface MenuBtnProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <motion.div
      className={styles.hamburger_wrapper}
      onClick={(e) => onClickHandler()}
    >
      <div
        className={`${styles.hamburger} ${active ? styles.active : ''}`}
        id='hamburger'
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.div>
  );
};

export default MenuBtn;
