import { useEffect, useReducer } from "react";

import { MainClient, NamedAPIResource } from "pokenode-ts";

import "./App.css";

import Modal from "./Components/Modal";
import Aside from "./Components/Aside";
import Header from "./Components/Header";
import Main from "./Components/Main";

const getRandomItems = (data: NamedAPIResource[], num: number) => {
  const arr = [...data];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, num);
};

const manageData = (data: NamedAPIResource[]) => {
  return data.map((x) => {
    const obj = x;
    obj.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.url
      .split("pokemon/")[1]
      .replace("/", ".png")}`;
    return obj;
  });
};

type Action =
  | { type: "newSetOfCards"; payload: NamedAPIResource[] }
  | { type: "setNumberOfCards"; payload: string }
  | { type: "gameTurn"; payload: string }
  | { type: "turnModalOff" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "newSetOfCards":
      return {
        ...state,
        data: manageData(action.payload),
        cards: getRandomItems(manageData(action.payload), state.numberOfCards),
      };
    case "setNumberOfCards":
      return {
        ...state,
        numberOfCards: Number(action.payload),
        score: 0,
        visited: [],
        bestScore: 0,
        cards: getRandomItems(state.data, Number(action.payload)),
      };
    case "gameTurn": {
      //Loosing
      if (state.visited.includes(action.payload)) {
        return {
          ...state,
          modal: "looser",
          score: 0,
          cards: getRandomItems(state.data, state.numberOfCards),
          visited: [],
        };
        //Winning
      } else if (state.visited.length + 1 === state.numberOfCards) {
        return {
          ...state,
          modal: "winner",
          score: 0,
          bestScore: state.numberOfCards,
          cards: getRandomItems(state.data, state.numberOfCards),
          visited: [],
        };
        //turn + best Score
      } else if (state.score + 1 > state.bestScore) {
        return {
          ...state,
          visited: [...state.visited, action.payload],
          cards: getRandomItems(state.cards, state.numberOfCards),
          score: state.score++,
          bestScore: state.bestScore++,
        };
        //turn
      } else {
        return {
          ...state,
          cards: getRandomItems(state.cards, state.numberOfCards),
          visited: [...state.visited, action.payload],
          score: state.score++,
        };
      }
    }
    case "turnModalOff":
      return { ...state, modal: null };

    default:
      return state;
  }
};

type State = {
  data: NamedAPIResource[];
  cards: NamedAPIResource[];
  numberOfCards: number;
  score: number;
  bestScore: number;
  visited: string[];
  modal: null | string;
};

const initialState = {
  data: [],
  cards: [],
  numberOfCards: 18,
  score: 0,
  bestScore: 0,
  visited: [],
  modal: null,
} satisfies State;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const api = new MainClient();

      await api.pokemon
        .listPokemons(0, 151)
        .then((data) => {
          dispatch({ type: "newSetOfCards", payload: data.results });
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <>
      <Header />
      <Aside
        score={state.score}
        bestScore={state.bestScore}
        numberOfCards={state.numberOfCards}
        setNumber={(e) => dispatch({ type: "setNumberOfCards", payload: e.target.value })}
      />
      <Main
        cards={state.cards}
        setCards={(name) => dispatch({ type: "gameTurn", payload: name })}
      />
      {state.modal && (
        <Modal
          variant={state.modal}
          setModal={() => {
            dispatch({ type: "turnModalOff" });
          }}
        />
      )}
    </>
  );
}

export default App;
