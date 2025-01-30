function Card({ name, url, setCards }: { name: string; setCards: () => void; url: string }) {
  return (
    <button onClick={setCards}>
      <h4>{name}</h4>
      <img src={url}></img>
    </button>
  );
}

export default Card;
