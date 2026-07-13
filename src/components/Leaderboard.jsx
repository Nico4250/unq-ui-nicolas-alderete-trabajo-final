import styles from "../styles/leaderboard.module.css";

export default function Leaderboard({ entries }) {
  return (
    <div className="panel">
      <p className={styles.eyebrow}>TOP 10</p>
      <ol className={styles.list}>
        {entries.map((entry, index) => {
          const isFirst = index === 0;
          return (
            <li
              key={index}
              className={`${styles.entry} ${isFirst ? styles.entryFirst : ""}`}
            >
              <span className={`${styles.rank} ${isFirst ? styles.rankFirst : ""}`}>
                {index + 1}
              </span>
              <span className={`${styles.name} ${isFirst ? styles.nameFirst : ""}`}>
                {entry.name}
              </span>
              <span className={`${styles.score} ${isFirst ? styles.scoreFirst : ""}`}>
                {entry.score} pts
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}