import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Country from './Country';


function Home() {

  // Insert your code here
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(response => response.json())
    .then(data => {
      setCountries(data.data)
    })
  }, []);



  const countryComponents = countries.map((data) => {
    return <Country key={data.name} name={data.name} flag={data.flag} iso3={data.iso3}/>;
  });


  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}>My World Tour</h1>
      <span className={styles.counter}>Number of countries: {countries.length}</span>
      <div className={styles.countriesContainer}>
        {countryComponents}
      </div>
    </div>
  );
}


export default Home;