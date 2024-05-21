import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <Dice number={1} />
      <Dice number={2} />
      <Dice number={3} />
      <Dice number={4} />
      <Dice number={5} />
    </div>
  );
}

export default Home;
