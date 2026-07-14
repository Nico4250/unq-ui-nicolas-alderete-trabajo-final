import styles from "../styles/scoreboard.module.css";

export default function ScoreBoard({ score }) {
  return (
    <div className={`panel ${styles.row}`}>
      <p className={`eyebrow ${styles.eyebrow}`}>Puntaje</p>
      <span key={score} className={`${styles.value} ${styles.pop}`}>
        {score}
      </span>
    </div>
  );
}
