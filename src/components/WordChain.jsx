export default function WordChain({ chain }) {
  return <p>Cadena: {chain.join(" → ")}</p>;
}