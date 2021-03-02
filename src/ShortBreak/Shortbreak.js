import React, { useState, useEffect } from "react";
import styles from "./shortbreak.module.css";

function Shortbreak() {
  const [rung, setRung] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 5, s: 0 });
  /* useEffect(() => {
    if (rung) {
      const myVar = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      setIntervalId(myVar);
    } else {
      clearInterval(intervalId);
    }
  }, [rung]); */

  var updateM = timer.m;
  var updateS = timer.s;

  const run = () => {
    if (updateS === 0) {
      updateM--;
      updateS = 60;
    }
    updateS--;
    return setTimer({ m: updateM, s: updateS });
  };
  const start = () => {
    run();
    setRung(1);

    setIntervalId(setInterval(run, 1000));
  };
  const stop = () => {
    clearInterval(intervalId);
    setRung(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.btn}>Promodoro</div>
        <div className={styles.btn}>ShortBreak</div>
        <div className={styles.btn}>Long Break</div>
      </div>

      <div className={styles.box2}>
        {timer.m >= 10 ? timer.m : "0" + timer.m} :
        {timer.s >= 10 ? timer.s : "0" + timer.s}
      </div>
      <div className={styles.box3}>
        <button>
          {rung == 0 ? (
            <span onClick={() => start()}>STAR</span>
          ) : (
            <span onClick={() => stop()}>STOP</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Shortbreak;
