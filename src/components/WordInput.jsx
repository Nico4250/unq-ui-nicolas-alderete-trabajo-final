import styles from "../styles/wordInput.module.css";

export default function WordInput({
  input,
  onInputChange,
  onSubmit,
  lastLetter,
  error,
}) {
  return (
    <div className="panel">
      <p className={`eyebrow ${styles.eyebrow}`}>
        Escriba la siguiente palabra
      </p>
      <form className={styles.row} onSubmit={onSubmit}>
        <input
          className={`${styles.input} ${error ? styles.inputInvalid : ""}`}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={lastLetter ? `${lastLetter}...` : "ej: interfaces"}
        />
        <button type="submit" className={`actionBtn ${styles.submitBtn}`}>
          Enviar
        </button>
      </form>
      <p className={`${styles.errorMsg} ${error ? styles.errorMsgShow : ""}`}>
        {error || ""}
      </p>
    </div>
  );
}
