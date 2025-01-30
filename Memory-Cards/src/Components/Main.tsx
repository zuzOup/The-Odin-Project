import Card from "./Card";

function Main({ cards, setCards }: { cards: any; setCards: (name: "string") => void }) {
  return (
    <main>
      {cards.map((card: any) => (
        <Card
          key={card.name}
          name={card.name}
          url={card.url}
          setCards={() => setCards(card.name)}
        />
      ))}
    </main>
  );
}

export default Main;
