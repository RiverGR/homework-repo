import { useEffect, useRef, useState } from "react";
import "../styles/stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // interval 저장용 (렌더링 X)
  const intervalRef = useRef(null);

  // Start / Stop
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // Reset
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  // 타이머 관리
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    // cleanup
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // 시간 포맷
  const formatTime = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);

    return (
      String(min).padStart(2, "0") +
      ":" +
      String(sec).padStart(2, "0") +
      ":" +
      String(cs).padStart(2, "0")
    );
  };

  return (
    <div className="stopwatch">
      <h1>{formatTime(time)}</h1>

      <div className="buttons">
        <button className={`start`} onClick={toggleTimer}>
          {isRunning ? "Stop" : "Start"}
        </button>

        <button className="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
