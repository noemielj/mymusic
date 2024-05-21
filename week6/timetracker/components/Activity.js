import styles from '../styles/Activity.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { timerStart, timerStop, deleteActivities} from '../reducers/activities';



function Activity(props) {
  const dispatch = useDispatch(); 
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [time, setTime] = useState(0);

  const timer = new Date(props.timer * 1000).toISOString().slice(11, 19);

  // useEffect(() => {
  //   setDate(new Date());
  // }, []);

  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleStartClick = () => {
    console.log()
    dispatch(timerStart());
    setRunning(true);
  }

  const handleStopClick = () => {
    dispatch(timerStop({id : props.id}));
    setRunning(false);
  }

  const handleDeleteClick = () => {
    dispatch(deleteActivity({ id: props.id }));
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <>
      <div className={styles.activityWindow}>
        <div className={styles.activityHeader}>
          {props.name}
          <div className={styles.delete} onClick={handleDeleteClick} >X</div>
        </div>

        {timer}

        <div className={styles.buttonSection}>
        {/* <input type="text" placeholder="Start" id="timerStart"  onChange={(e) => setTimerStart(e.target.value)} value={timerStart} /> */}
          <button onClick={handleStartClick}>Start</button>
          <button onClick={handleStopClick} >Stop</button>
          {/* <input type="text" placeholder="Stop" id="timerStop" onChange={(e) => setTimerStop(e.target.value)} value={timerStop} /> */}
        </div>
      </div>
    </>
  );
}

export default Activity;
