import styles from '../styles/Products.module.css';

function Products() {
  const products = [
    {
      name: 'PHANTOM I White',
      description: 'A class of its own.',
      image: '/phantom1.png',
    },
    {
      name: 'PHANTOM II Gold',
      description: 'Pure sound.',
      image: '/phantom2.png',
    },
    {
      name: 'PHANTOM II Black',
      description: 'Deeply nomadic.',
      image: '/phantom3.png',
    },
    {
      name: 'PHANTOM II White',
      description: 'Intensively immersive.',
      image: '/phantom4.png',
    },
  ];

  const productsCards = products.map((product, i) => {
    return (
      <div key={i} style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover' }} className={styles.productCard}>
        <div className={styles.textDiv}>
          <span className={styles.textThin}>{product.name}</span>
          <span className={styles.textBold}>{product.description}</span>
          <button className={styles.buttonDark}>DISCOVER</button>
        </div>
      </div>
    )
  });

  return (
    <div className={styles.main}>
      {productsCards}
    </div>
  );
}

export default Products;
