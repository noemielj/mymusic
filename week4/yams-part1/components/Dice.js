import React from 'react'; 
import styles from '../styles/Dice.module.css';

function Dice () {
    return (
        <img
          className={styles.dice}
          src={"1.png"}
          alt={number}
        />
      );
}

export default Dice;