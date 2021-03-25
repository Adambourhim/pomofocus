import React, { useState } from "react";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function Header() {
  const [colors, setColors] = useState("#F0F800");
  const myArt = { backgroundColor: { colors } };
  //  "rgb(86, 139, 178)"
  // "rgb(89, 154, 157)"
  //console.log(myArt);
  const { search } = useLocation();
  console.log(search);
  return (
    <>
      <div className={styles.container}>
        <div>Promofocus</div>
        <div className={styles.box}>
          <button className={styles.btn}>Report</button>
          <button className={styles.btn}>Setting</button>
          <button className={styles.btn}>Login</button>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

export default Header;
