import { useEffect, useRef, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(new Date());
  const [running, setRunning] = useState(true);

  // 인터벌 아이디를 안전하게 보관하기 (다시 렌더링돼도 유지)
  const timerRef = useRef(null);

  useEffect(() => {
    // running이 false면 타이머 중지 상태 유지
    if (!running) return;

    // 실행 중이면 1초마다 현재 시간 갱신
    timerRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // cleanup: running 변경/언마운트 시 인터벌 정리
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [running]); // deps: running 바뀔 때만 타이머 재설정

  const toggle = () => setRunning((prev) => !prev);

  // "오후 x:xx:xx" 같은 형태
  const timeText = now.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <section className="clockCard">
      <div className="label">CURRENT TIME</div>

      <div className="time">{timeText}</div>

      <button className={`btn ${running ? "stop" : "start"}`} onClick={toggle}>
        {running ? "STOP" : "START"}
      </button>

      <div className="status">
        <span className={`dot ${running ? "on" : "off"}`} />
        {running ? "Timer is running" : "Timer is stopped"}
      </div>
    </section>
  );
}
