import { AiFillMail } from 'react-icons/ai';

// styles
import styles from '../../styles/components/TopMenu.module.scss';

export default function TopMenu() {
  return (
    <div className={styles.top_menu}>
      <h2>NEWS NET</h2>
      <h3 className={styles.subtitle}>Your daily news online</h3>
      <AiFillMail />
    </div>
  );
}
