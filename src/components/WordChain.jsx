import styles from "../styles/wordChain.module.css";

export default function WordChain({ chain }) {
  return (
    <div className="panel">
      <p className={`eyebrow ${styles.eyebrow}`}>Cadena de palabras</p>
      <ul className={styles.list}>
        {chain.map((word, index) => {
          const isLatest = index === chain.length - 1;
          return (
            <li
              key={index}
              className={`${styles.chip} ${isLatest ? styles.chipLatest : ""}`}
            >
              {word}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
