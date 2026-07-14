import { useState, useEffect } from "react";
import { validateWord } from "../services/wordService";
import { isWordUsed, isChainable } from "../utils/gameValidations";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";
import WordChain from "../components/WordChain";
import WordInput from "../components/WordInput";
import GameOver from "../components/GameOver";
import styles from "../styles/game.module.css";

export default function Game() {
  const [chain, setChain] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);
  const [isValidating, setIsValidating] = useState(false);
  const [prevChainLength, setPrevChainLength] = useState(chain.length);
  const [status, setStatus] = useState("playing");
  const score = chain.reduce((acc, word) => acc + word.length, 0);

  const lastLetter =
    chain.length > 0 ? chain[chain.length - 1].slice(-1).toUpperCase() : "";

  const resetGame = () => {
    setChain([]);
    setInput("");
    setError("");
    setTimeLeft(15);
    setPrevChainLength(0);
    setStatus("playing");
    setIsValidating(false);
  };

  if (chain.length !== prevChainLength) {
    setPrevChainLength(chain.length);
    setTimeLeft(15);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (isValidating) {
            return 1;
          }
          clearInterval(timer);
          setStatus("GameOver");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [chain.length, isValidating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const word = input.trim().toLowerCase();

    if (word === "") {
      setError("Ingresá una palabra.");
      return;
    }

    if (isWordUsed(word, chain)) {
      setError("La palabra ya fue utilizada.");
      return;
    }
    if (!isChainable(word, chain)) {
      setError("La palabra no respeta la regla de encadenamiento.");
      return;
    }

    setIsValidating(true);
    const exists = await validateWord(word);
    setIsValidating(false);
    if (!exists) {
      setError("La palabra no existe.");
      return;
    }

    setChain([...chain, word]);
    setInput("");
    setError("");
  };

  if (status === "GameOver") {
    return (
      <GameOver
        wordCount={chain.length}
        score={score}
        onPlayAgain={resetGame}
      />
    );
  }

  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Palabras Encadenadas</h1>
      <Timer timeLeft={timeLeft} />
      <WordInput
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        lastLetter={lastLetter}
        error={error}
      />
      <WordChain chain={chain} />
      <ScoreBoard score={score} />
    </div>
  );
}
