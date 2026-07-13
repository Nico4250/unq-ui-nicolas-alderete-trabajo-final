import { useState } from "react";
import EnterName from "./EnterName";
import Leaderboard from "./Leaderboard";
import { saveScore } from "../utils/leaderboardStorage";
import styles from "../styles/gameover.module.css";

export default function GameOver({ wordCount, score, onPlayAgain }) {
  const [leaderboard, setLeaderboard] = useState(null);

  const handleNameSubmit = (name) => {
    const updated = saveScore(name, score);
    setLeaderboard(updated);
  };

  return (
    <div className={`panel ${styles.wrap}`}>
      <h1 className={styles.title}>¡Partida finalizada!</h1>
      <p className={styles.stat}>Palabras encadenadas: {wordCount}</p>
      <p className={styles.stat}>Puntaje final: {score}</p>

      <hr className={styles.divider} />

      {leaderboard === null ? (
        <EnterName onSubmit={handleNameSubmit} />
      ) : (
        <>
          <Leaderboard entries={leaderboard} />
          <button onClick={onPlayAgain} className={`actionBtn ${styles.playAgain}`}>
            Jugar de nuevo
          </button>
        </>
      )}
    </div>
  );
}