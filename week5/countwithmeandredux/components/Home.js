import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../reducers/counter';

function Home() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={500} height={200} />

      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} onClick={handleDecrement} id="decrementBtn">-</button>
        <span className={styles.counter}>{count}</span>
        <button className={styles.incrementBtn} onClick={handleIncrement}id="incrementBtn">+</button>
      </div>
    </div>
  );
}

export default Home;
