import { useState } from "react";
import styles from "../styles/enterName.module.css";

export default function EnterName({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onSubmit(name.trim().toUpperCase());
  };

  return (
    <form className={styles.wrap} onSubmit={handleSubmit}>
      <p className={styles.label}>Ingresa tu nombre (3 caracteres)</p>
      <div className={styles.row}>
        <input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 3))}
          maxLength={3}
          placeholder="AAA"
        />
        <button type="submit" className={`actionBtn ${styles.confirmBtn}`}>
          Confirmar
        </button>
      </div>
    </form>
  );
}