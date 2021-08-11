import { useState, useRef } from "react";
import { padTime } from "./helpers";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef();

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 1) return timeLeft - 1;
      });
    }, 1000);

    setTimerRunning(true);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="App">
      <main className="main flex-column centered">
        <div className="pomodoro-container flex-column">
          <h1 className="title">Pomodoro</h1>
          <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <div className="buttons flex-row">
            {!timerRunning ? (
              <button
                className="button"
                id="start-or-pause"
                onClick={startTimer}
              >
                Start
              </button>
            ) : (
              <button
                className="button"
                id="start-or-pause"
                onClick={pauseTimer}
              >
                Pause
              </button>
            )}
            <button className="button" id="stop" onClick={stopTimer}>
              Stop
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
