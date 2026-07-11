export default function Leaderboard({ entries }) {
  return (
    <div>
      <h2>TOP 10</h2>
      <ol>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name} — {entry.score} pts
          </li>
        ))}
      </ol>
    </div>
  );
}