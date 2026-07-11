import { useState } from "react";
import EnterName from "./EnterName";
import Leaderboard from "./Leaderboard";
import { saveScore } from "../utils/leaderboardStorage";

export default function GameOver({ wordCount, score, onPlayAgain}) {
  const [leaderboard, setLeaderboard] = useState(null);

  const handleNameSubmit = (name) => {
    const updated = saveScore(name, score);
    setLeaderboard(updated);
  };

  return (
    <div>
      <h1>¡Partida finalizada!</h1>
      <p>Palabras encadenadas: {wordCount}</p>
      <p>Puntaje final: {score}</p>

      {leaderboard === null ? (
        <EnterName onSubmit={handleNameSubmit} />
      ) : (
        <>
        <Leaderboard entries={leaderboard} />
        <button onClick={onPlayAgain}>Jugar de nuevo</button>
        </>
      )}
      
    </div>
  );
}