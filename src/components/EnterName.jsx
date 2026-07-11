import { useState } from "react";

export default function EnterName({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onSubmit(name.trim().toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Ingresá tu nombre (3 caracteres):</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value.slice(0, 3))}
        maxLength={3}
      />
      <button type="submit">Confirmar</button>
    </form>
  );
}