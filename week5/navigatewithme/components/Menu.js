import styles from '../styles/Menu.module.css';
import Link from 'next/link'; 

function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Navigate with me</span>
      <div className={styles.linkContainer}>
      <Link href="/">
          <span className={styles.link}>Home</span>
        </Link>

        <Link href="/shop">
        <span className={styles.link}>Shop</span>
        </Link>

        <Link href="/about">
          <span className={styles.link}>About</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
