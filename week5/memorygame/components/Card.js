import Image from 'next/image';
import styles from '../styles/Card.module.css';
import {useState} from 'react';

function Card(props) {

  const [isReturn, setIsReturn] = useState(false)

  const handleCLick = () => {
    if(!isReturn) {
      props.selectCard(props.id)
      setIsReturn(true)
    }
  }
  return (
    <div onClick={handleCLick} className={`${styles.card} ${props.selected && styles.active}`}>
      <div className={styles.flipper}>
        <div className={styles.cardFront}>
          <Image src="/images/questionmark.svg" alt="Card back" width={50} height={50} />
        </div>
        <div className={styles.cardBack}>
          <Image src={`/images/${props.image}`} alt={props.name} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export default Card;
