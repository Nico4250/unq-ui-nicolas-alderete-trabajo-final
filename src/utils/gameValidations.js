export const isWordUsed = (word, chain) => {
  return chain.includes(word.toLowerCase());
};

export const isChainable = (word, chain) => {
  if (chain.length === 0) return true;
  const lastWord = chain[chain.length - 1];
  const lastLetter = lastWord[lastWord.length - 1];
  return word[0].toLowerCase() === lastLetter.toLowerCase();
};
