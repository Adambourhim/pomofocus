import React, { useState, useEffect } from "react";
import styles from "./LongBreak.module.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function LongBreak() {
  const [rung, setRung] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 15, s: 0 });

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
        <Link className={styles.btn} to="/">
          Pomodoro
        </Link>
        <Link className={styles.btn} to="/ShortBreak">
          ShortBreak
        </Link>
        <Link className={styles.btn} to="/LongBreak">
          Long Break
        </Link>
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

export default LongBreak;
