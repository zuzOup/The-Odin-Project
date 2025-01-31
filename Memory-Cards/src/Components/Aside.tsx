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
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <label>
        Number of Cards:{" "}
        <input
          value={numberOfCards}
          type="number"
          min="2"
          max="151"
          onChange={setNumber}
        ></input>
      </label>
    </aside>
  );
}

export default Aside;
