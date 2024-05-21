import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react'

function Home() {
const [ identifiant, setIdentifiant ] = useState(''); 
const [ password, setPassword ] = useState('')
const [loggedIn, setLoggedIn] = useState(false);

let agentID = "codybanks"
let passwordID = "qwerty123"

function handleLoginClick() {
  
  if (identifiant === 'codybanks' && password === 'qwerty123') {
    setLoggedIn(true);
   
  }
}

if (loggedIn) {
  return (
    <div>
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} /> {" "}
      </div> {" "}
      <div> Welcome, agent Cody Banks </div>
    </div>
  )
} else {
  


  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      <h1>CIA LOGIN</h1>
      <div className={styles.inputContainer}>
        <span>AGENT ID</span>
        <input type="text" id="agentId" onChange={(e) => setIdentifiant(e.target.value)} value={identifiant}/>
      </div>

      <div className={styles.inputContainer}>
        <span>PASSWORD</span>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
      <button id="login" onClick={handleLoginClick}>LOGIN</button>
    </div>
  );
}
}

export default Home;
