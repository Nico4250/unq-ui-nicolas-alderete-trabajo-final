const MAX_ENTRIES = 10;
const STORAGE_NAME = "leaderboard";

export const getLeaderboard = () => {
  const data = localStorage.getItem(STORAGE_NAME);
  return data ? JSON.parse(data) : [];
};

export const saveScore = (name, score) => {
  const leaderboard = getLeaderboard();
  const updated = [...leaderboard, { name, score }]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ENTRIES);

  localStorage.setItem(STORAGE_NAME, JSON.stringify(updated));
  return updated;
};

