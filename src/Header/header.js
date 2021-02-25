import React from "react";
import styles from "./header.module.css";
function header() {
  return (
    <div className={styles.container}>
      <div>Promofocus</div>
      <div className={styles.box}>
        <button className={styles.btn}>Report</button>
        <button className={styles.btn}>Setting</button>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
}

export default header;
