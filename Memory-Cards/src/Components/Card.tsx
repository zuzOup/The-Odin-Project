function nameFormat(str: string) {
  return (str.charAt(0).toUpperCase() + str.slice(1)).split("-")[0];
}

type Props = {
  name: string;
  setCards: () => void;
  url: string;
};

function Card({ name, url, setCards }: Props) {
  return (
    <button onClick={setCards} className="card">
      <img src={url} alt={`Pokemon - ${nameFormat(name)}`}></img>
      <h4>{nameFormat(name)}</h4>
      <div></div>
    </button>
  );
}

export default Card;
