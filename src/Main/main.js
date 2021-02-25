import React, { useState } from "react";
import styles from "./main.module.css";
function Main() {
  const [timer, useTimer] = useState(25);
  const [second, useSecond] = useState("00");
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.btn}>Promodoro</div>
        <div className={styles.btn}>Short Break</div>
        <div className={styles.btn}>Long Break</div>
      </div>
      <div className={styles.box2}>
        {timer} : {second}
      </div>
      <div className={styles.box3}>
        <button>Start</button>
      </div>
    </div>
  );
}

export default Main;
