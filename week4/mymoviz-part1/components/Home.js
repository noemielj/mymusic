import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Button, Popover } from 'antd';
import React from 'react';

import Movie from '../components/Movie';


const content = ( <div>
  <p> Movie 1</p>
  <p> Movie 2</p>
  <p> Movie 3</p>
  <p> Movie 4</p>
  </div>
)

function Home() {

  const movies = []; 
  for (let i =0; i < 10; i++) {
    movies.push(<Movie />)
  }
  return (
    <div>
        
      <header className={styles.header}>
         <img src="logo.png" alt="Logo" className={styles.logo} />
         <img src="logoletter.png" alt="Letter logo" className={styles.logoLetter} />

       
  <Popover content={content} title="moviesList" trigger="click">
      <Button className={styles.buttonHeader} type="primary">♥ 4 movie(s)</Button>
  </Popover>

    </header>
      <main className={styles.main}>
      <h1 className={styles.title}>Last releases</h1>
     
        
      <div className={styles.movieList}> {movies}   </div>


      </main>
    
    </div>
  );
}


export default Home;
