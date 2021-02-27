import Timer from "easytimer.js";
import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
function Main() {
  const [rung, setRung] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const mytimer = new Timer();
  const minute = mytimer.getTotalTimeValues().minutes;
  const second = mytimer.getTotalTimeValues().seconds;
  const [timerM, setTimerM] = useState(minute + 25);
  const [timerS, setTimerS] = useState(second);
  useEffect(() => {
    if (rung) {
      const myVar = setInterval(() => {
        setTimerM((timer) => timer + 1);
      }, 1000);
      setIntervalId(myVar);
    } else {
      clearInterval(intervalId);
    }
  }, [rung]);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.btn}>Promodoro</div>
        <div className={styles.btn}>Short Break</div>
        <div className={styles.btn}>Long Break</div>
      </div>
      <div className={styles.box2}>
        {timerM}:{timerS}
      </div>
      <div className={styles.box3}>
        <button>
          {rung ? (
            <span onClick={() => setRung(false)}>STOP</span>
          ) : (
            <span onClick={() => setRung(true)}>STAR</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Main;
