import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import { faBars, faUser, faLocationDot, faShoppingBag } from '../node_modules/@fortawesome/free-solid-svg-icons';
import NewProduct from './NewProduct';
import Products from './Products';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerBar}>
            <div className={styles.iconsSection}>
              <FontAwesomeIcon icon={faBars} className={styles.icon} />
            </div>

            <span className={styles.title}>MUSIC STORE</span>
            <div className={styles.iconsSection}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} />
            </div>
          </div>

          <div className={styles.headerBottom}>
            <div className={styles.divColumn}>
              <span>PHANTOM</span>
              <span className={styles.textBold}>IMPLOSIVE SOUND</span>
            </div>
            <div>
              <button className={styles.buttonLight}>DISCOVER</button>
              <button className={styles.buttonDark}>BUY</button>
            </div>
          </div>
        </div>

        <NewProduct />
        <Products />

        <div className={styles.footer}>
          <span className={styles.link}>ABOUT</span>
          <span className={styles.link}>CONTACT</span>
          <span className={styles.link}>SUPPORT</span>
          <span className={styles.link}>STORES</span>
        </div>
      </main>
    </div>
  );
}

export default Home;
