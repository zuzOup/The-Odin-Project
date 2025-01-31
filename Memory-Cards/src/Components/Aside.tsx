function Aside({
  score,
  bestScore,
  numberOfCards,
  setNumber,
}: {
  score: number;
  bestScore: number;
  numberOfCards: number;
  setNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <aside>
      <div>Score:{score}</div>
      <div>Best Score:{bestScore}</div>
      <input
        value={numberOfCards}
        type="number"
        min="2"
        max="151"
        onChange={setNumber}
      ></input>
    </aside>
  );
}

export default Aside;
