import Dice from './Dice';
import styles from '../styles/Home.module.css';
import { useState } from 'react'


function Home() {

  const [showDices, setShowDices] = useState(false);
  const [diceValues, setDiceValues] = useState([]);

  const rollDice = () => {
    const newDiceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    setDiceValues(newDiceValues);
    setShowDices(true);
  };

  const dices = [];
  for (let i = 0; i < 5; i++) {
    dices.push(<Dice key={i} number={i + 1} />);
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleLeftRed}></div>
        <div className={styles.triangleLeft}></div>
      </div>
      <div className={styles.middleSection}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.board}>
          {showDices && diceValues.map((value, index) => (
            <Dice key={index} number={value} />
          ))}
        </div>
        {!showDices && <button className={styles.BtnLaunch} onClick={rollDice} > Launch</button>}
      </div>
      <div>
        <div className={styles.triangleRight}></div>
        <div className={styles.triangleRightRed}></div>
        <div className={styles.triangleRight}></div>
      </div>
    </div>
  );
}

export default Home;
