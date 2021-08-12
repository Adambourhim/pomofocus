import React, { useState } from "react";
import styles from "./LongBreak.module.css";
import { BrowserRouter as Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Animated } from "react-animated-css";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";

function LongBreak() {
  const [rung, setRung] = useState(0);
  const [rung2, setRung2] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState({ m: 15, s: 0 });
  const [anim, setAnim] = useState(false);
  const [counter0, setCounter0] = useState(25);
  const [counter1, setCounter1] = useState(15);
  const [counter2, setCounter2] = useState(5);
  const [counter3, setCounter3] = useState(4);

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
              {rung == 0 ? (
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
              {rung2 == 0 ? (
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

export default LongBreak;
