import Card from "./Card";

type Card = {name:string, url:string}

function Main({ cards, setCards }: { cards: Card[]; setCards: (name: string) => void }) {
  return (
    <main>
      <div>
        {cards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            url={card.url}
            setCards={() => setCards(card.name)}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
