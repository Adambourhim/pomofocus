import React, { useState } from "react";
import styles from "./pomodoro.module.css";
import { BrowserRouter as Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Animated } from "react-animated-css";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
function Pomodoro() {
  const [rung, setRung] = useState(0);
  const [rung2, setRung2] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 25, s: 0 });
  const [anim, setAnim] = useState(false);
  const [anim2, setAnim2] = useState(false);
  const [counter0, setCounter0] = useState(25);
  const [counter1, setCounter1] = useState(15);
  const [counter2, setCounter2] = useState(5);
  const [counter3, setCounter3] = useState(4);
  // const [runSt, setRunSt] = useState(false);
  var updateM = timer.m;
  var updateS = timer.s;

  const run = () => {
    if (updateM === 0 && updateS === 0) {
      clearInterval(intervalId);
      setRung(0);
      return;
    }
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
  console.log(timer.m);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>Promofocus</div>

        <div className={styles.box}>
          <button className={styles.btn}>Report</button>
          <button
            className={styles.btn}
            onClick={() => {
              anim ? setAnim(false) : setAnim(true);
            }}
          >
            Setting
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              anim2 ? setAnim2(false) : setAnim2(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <hr className={styles.Phr} />
      <div className={styles.Pcontainer}>
        <div className={styles.Pbox}>
          <Link className={styles.Pbtn} onClick={() => changeColor1()} to="/">
            Pomodoro
          </Link>

          <Link
            className={styles.Pbtn}
            onClick={() => {
              changeColor2();
            }}
            to="/ShortBreak"
          >
            ShortBreak
          </Link>

          <Link
            className={styles.Pbtn}
            onClick={() => changeColor3()}
            to="/LongBreak"
          >
            Long Break
          </Link>
        </div>

        <div className={styles.Pbox2}>
          {timer.m >= 10 ? timer.m : "0" + timer.m}:
          {timer.s >= 10 ? timer.s : "0" + timer.s}
        </div>

        <div className={styles.Pbox3}>
          <button>
            {rung === 0 ? (
              <span onClick={() => start()}>STAR</span>
            ) : (
              <span onClick={() => stop()}>STOP</span>
            )}
          </button>
        </div>
        <div className={styles.Pcontainer2}>
          <div className={styles.Ptitle}>Time to work !</div>
        </div>
        <div className={styles.Pcontainer3}>
          <div className={styles.Ptasks}>Tasks</div>
          <div className={styles.Ppoints}>
            <HiOutlineDotsVertical size="25px" color="white" />
          </div>
        </div>

        <hr />
        <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInDuration={500}
          animationOutDuration={0}
          isVisible={anim2 ? true : false}
        >
          <div className={styles.Panim2}>
            <div className={styles.contact}>
              <FcGoogle />
              <div className={styles.login}>Login With Google</div>
            </div>

            <hr />
            <div className={styles.contact}>
              <CgMail />
              <div className={styles.login}>Login With Email</div>
            </div>
          </div>
        </Animated>

        <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInDuration={800}
          animationOutDuration={0}
          isVisible={anim ? true : false}
        >
          <div className={styles.Panim}>
            <div className={styles.cloes}>
              <div className={styles.titleS}>TIMER SETTINGS</div>
              <HiOutlineX />
            </div>

            <hr className={styles.Ahr} />
            <div className={styles.secondT}>Time (minutes)</div>
            <div className={styles.container5}>
              <div>
                Promodoro
                <div className={styles.Ainput}>
                  <p className={styles.counter}>{counter0}</p>
                  <div className={styles.upDown}>
                    <AiFillCaretUp
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter0(counter0 + 1)}
                    />
                    <AiFillCaretDown
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter0(counter0 - 1)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divCounter}>
                Short Break
                <div className={styles.Ainput}>
                  <p className={styles.counter}>{counter2}</p>
                  <div className={styles.upDown}>
                    <AiFillCaretUp
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter2(counter2 + 1)}
                    />
                    <AiFillCaretDown
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter2(counter2 - 1)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divCounter}>
                Long Break
                <div className={styles.Ainput}>
                  <p className={styles.counter}>{counter1}</p>
                  <div className={styles.upDown}>
                    <AiFillCaretUp
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter1(counter1 + 1)}
                    />
                    <AiFillCaretDown
                      style={{ cursor: "pointer" }}
                      onClick={() => setCounter1(counter1 - 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>
              Auto start next round?
              {rung === 0 ? (
                <BsToggleOff
                  size="50px"
                  style={{ marginTop: "-16px", cursor: "pointer" }}
                  onClick={() => setRung(1)}
                />
              ) : (
                <BsToggleOn
                  size="50px"
                  style={{ marginTop: "-16px", cursor: "pointer" }}
                  onClick={() => setRung(0)}
                />
              )}
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>
              Long Break interval
              <div className={styles.Ainput3}>
                <p className={styles.counter}>{counter3}</p>
                <div className={styles.upDown}>
                  <AiFillCaretUp
                    style={{ cursor: "pointer" }}
                    onClick={() => setCounter3(counter3 + 1)}
                  />
                  <AiFillCaretDown
                    style={{ cursor: "pointer" }}
                    onClick={() => setCounter3(counter3 - 1)}
                  />
                </div>
              </div>
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.diVolum}>
              <div className={styles.secondT2}>Alarm Volume</div>
              <input className={styles.volum} type="range" min="1" max="100" />
            </div>

            <hr className={styles.Ahr3} />
            <div className={styles.combo}>
              <div className={styles.secondT2}>Ticking Sound</div>
              <div className={styles.comboV}>
                <select name="example" className={styles.selectcom}>
                  <option value="A">None</option>
                  <option value="B">Ticking Fast</option>
                  <option value="-">Ticking Slow</option>
                </select>
                <input
                  className={styles.volum}
                  type="range"
                  min="1"
                  max="100"
                />
              </div>
            </div>

            <hr className={styles.Ahr3} />
            <div className={styles.secondT2}>
              Dark Mode when running
              {rung2 === 0 ? (
                <BsToggleOff
                  size="50px"
                  style={{ marginTop: "-16px", cursor: "pointer" }}
                  onClick={() => setRung2(1)}
                />
              ) : (
                <BsToggleOn
                  size="50px"
                  style={{ marginTop: "-16px", cursor: "pointer" }}
                  onClick={() => setRung2(0)}
                />
              )}
            </div>
            <hr className={styles.Ahr3} />
            <div className={styles.notif}>
              <div className={styles.secondT2}>Notification</div>
              <select name="example" className={styles.selectcom}>
                <option value="A">Last</option>
                <option value="B">Every</option>
              </select>
            </div>

            <div className={styles.footer}>
              <button
                className={styles.btnOK}
                onClick={() => {
                  anim ? setAnim(false) : setAnim(true);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </Animated>
      </div>
    </>
  );
}

export default Pomodoro;
