import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';

function Home() {
  const [selectedBurgers, setSelectedBurgers] = useState([]);

//fonction pour selectionner un burger
  function selectBurger(newBurger) {
    setSelectedBurgers(prevSelectedBurgers => [...prevSelectedBurgers, newBurger]);
  }

// fonction pour supprimer un burger du tableau
  function removeBurger(burgerToDelete) {
    setSelectedBurgers(selectedBurgers.filter(burger => burger !== burgerToDelete));
  }

  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg' },
    { name: 'The Californian', image: 'californian.jpg' },
    { name: 'The Parisian', image: 'parisian.jpg' },
  ];

  const burgers = burgersData.map((data, i) => {
    return <Burger key={i} name={data.name} image={data.image} selectBurger={selectBurger} removeBurger={removeBurger}  />;
  });

  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Number of burgers selected: <span id="counter">{selectedBurgers.length}</span></h4>
      <button onClick={() => removeBurger('The Californian')}> Remove all </button>
      <div className={styles.burgerContainer}>
      
        {burgers}
        
      </div>
     </div>
  );
}

export default Home;
