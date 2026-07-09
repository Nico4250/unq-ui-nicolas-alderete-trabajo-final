import { useState } from "react";
import { validateWord } from "../services/wordService";
import { isWordUsed, isChainable } from "../utils/gameValidations";

export default function Game() {
  const [chain, setChain] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const score = chain.reduce((acc, word) => acc + word.length, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const word = input.trim().toLowerCase();
    if (word === "") return;

    if (isWordUsed(word, chain)) {
      setError("La palabra ya fue utilizada.");
      return;
    }
    if (!isChainable(word, chain)) {
      setError("La palabra no puede ser encadenada");
      return;
    }

    const exists = await validateWord(word);
    if (!exists) {
      setError("La palabra no existe.");
      return;
    }

    setChain([...chain, word]);
    setInput("");
    setError("");
  };

  return (
    <div>
      <h1>Palabras Encadenadas</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ingresá una palabra"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Cadena: {chain.join(" → ")}</p>
      <p>Puntaje: {score}</p>
    </div>
  );
}