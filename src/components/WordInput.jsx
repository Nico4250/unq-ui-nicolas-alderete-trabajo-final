export default function WordInput({ input, onInputChange, onSubmit, error }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Ingresá una palabra"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}