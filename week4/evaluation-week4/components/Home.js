import styles from '../styles/Home.module.css';
import Gift from './Gift';

const giftsList = [
  {name: 'Skydiving', picture: 'skydiving.jpg', price: 340},
  {name: 'Tattoo', picture: 'tattoo.jpg', price: 470},
  {name: 'PS5', picture: 'playstation.jpg', price: 520},
  {name: 'Travel to Bali', picture: 'bali.jpg', price: 1400},
]

function Home() {
  const giftElement = giftsList.map(data => {
    return <Gift key={data.name} name={data.name} picture={data.picture} price={data.price}/>
  });
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>My birthday wishlist</h1>
      <div className={styles.container}>
        {giftElement}
      </div>
    </div>
  );


}

export default Home;