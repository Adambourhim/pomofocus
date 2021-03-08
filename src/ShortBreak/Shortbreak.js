import React, { useState } from "react";
import styles from "./shortbreak.module.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Animated } from "react-animated-css";
function Shortbreak() {
  const [rung, setRung] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 5, s: 0 });
  const [anim, setAnim] = useState(false);

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
    <>
      <div className={styles.Hcontainer}>
        <div>Promofocus</div>

        <div className={styles.Hbox}>
          <button className={styles.Hbtn}>Report</button>
          <button
            className={styles.Hbtn}
            onClick={() => {
              anim ? setAnim(false) : setAnim(true);
            }}
          >
            Setting
          </button>
          <button className={styles.Hbtn}>Login</button>
        </div>
      </div>
      <hr className={styles.Hhr} />
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
        <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInDuration={1000}
          animationOutDuration={0}
          isVisible={anim ? true : false}
        >
          <div className={styles.Panim}>
            <div className={styles.titleS}>TIMER SETTINGS</div>
            <hr className={styles.Ahr} />
            <div className={styles.secondT}>Time (minutes)</div>
            <div className={styles.container5}>
              <div>
                Promodoro
                <input className={styles.Ainput} placeholder="25" />
              </div>
              <div>
                Short Break
                <input className={styles.Ainput} placeholder="5" />
              </div>
              <div>
                Long Break
                <input className={styles.Ainput} placeholder="15" />
              </div>
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Auto start next round?</div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>
              Long Break interval
              <input className={styles.Ainput2} placeholder="4" />
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Alarm Volume</div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Ticking Sound</div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Ticking Sound</div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Dark Mode when running</div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>Notification</div>
          </div>
        </Animated>
      </div>
    </>
  );
}

export default Shortbreak;
