import styles from '../styles/NewProduct.module.css';

function NewProduct() {
  return (
    <div className={styles.main}>
      <div className={styles.divColumn}>
        <span className={styles.textThin}>LATEST LAUNCH</span>
        <span className={styles.textBold}>DIONE SOUNDBAR</span>
      </div>

      <img className={styles.image} src="soundbar.png" alt="Soundbar" />

      <button className={styles.buttonDark}>DISCOVER</button>
    </div>
  );
}

export default NewProduct;
