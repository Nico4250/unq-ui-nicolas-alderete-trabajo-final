import styles from "../styles/timer.module.css";

const TOTAL_TIME = 15;
const WARNING_THRESHOLD = 7;
const DANGER_THRESHOLD = 3;

export default function Timer({ timeLeft }) {
  const state =
    timeLeft <= DANGER_THRESHOLD
      ? "danger"
      : timeLeft <= WARNING_THRESHOLD
      ? "warning"
      : null;

  const barPercent = Math.max(0, Math.min(100, (timeLeft / TOTAL_TIME) * 100));

  return (
    <div className={`panel ${styles.wrap}`}>
      <p className={`eyebrow ${styles.eyebrow}`}>Tiempo restante</p>
      <div
        key={timeLeft}
        className={`${styles.value} ${styles.tick} ${state ? styles[state] : ""}`}
      >
        {timeLeft}
      </div>
      <div className={styles.bar}>
        <div
          className={`${styles.barFill} ${
            state === "warning"
              ? styles.barFillWarning
              : state === "danger"
              ? styles.barFillDanger
              : ""
          }`}
          style={{ width: `${barPercent}%` }}
        />
      </div>
    </div>
  );
}