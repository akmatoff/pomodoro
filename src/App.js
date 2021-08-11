import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main flex-column centered">
        <div className="pomodoro-container flex-column">
          <h1 className="title">Pomodoro</h1>
          <div className="timer">
            <span>00</span>
            <span>:</span>
            <span>00</span>
          </div>
          <div className="buttons flex-row">
            <button className="button" id="start-or-pause">
              Start
            </button>
            <button className="button" id="stop">
              Stop
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
