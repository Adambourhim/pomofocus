import React, { useState } from "react";
import styles from "./shortbreak.module.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function Shortbreak() {
  const [rung, setRung] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 5, s: 0 });

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
  const changeColor1 = () => {
    document.body.style.backgroundColor = "rgb(219,82,77)";
  };
  const changeColor2 = () => {
    document.body.style.backgroundColor = "rgb(70, 142, 145)";
  };
  const changeColor3 = () => {
    document.body.style.backgroundColor = "rgb(67, 126, 168)";
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Link className={styles.btn} to="/" onClick={() => changeColor1()}>
          Pomodoro
        </Link>
        <Link
          className={styles.btn}
          to="/ShortBreak"
          onClick={() => changeColor2()}
        >
          ShortBreak
        </Link>
        <Link
          className={styles.btn}
          to="/LongBreak"
          onClick={() => changeColor3()}
        >
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
      <div className={styles.container2}>
        <div className={styles.title}>Time to work !</div>
      </div>
      <div className={styles.container3}>
        <div className={styles.tasks}>Tasks</div>
        <div className={styles.points}>
          <HiOutlineDotsVertical size="25px" color="white" />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Shortbreak;
