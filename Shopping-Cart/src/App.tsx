import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataObject, Data, cartFilter, fetchData } from "./helpers";

import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Contacts from "./Components/Contacts";
import Payment from "./Components/Payment";

type Action =
  | { type: "fetchData"; payload: DataObject }
  | { type: "addToCart"; payload: number }
  | { type: "subtractFromCart"; payload: number }
  | { type: "removeFromCart"; payload: number }
  | { type: "emptyCart" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "fetchData": {
      return { ...state, data: action.payload };
    }
    case "addToCart": {
      const id = action.payload;
      const data = {
        ...state.data,
        [id]: { ...state.data[id], cart: Number(state.data[id].cart) + 1 },
      };
      const cart = cartFilter(data);

      return { data, cart };
    }
    case "subtractFromCart": {
      const id = action.payload;
      if (state.data[id].cart === 0) return state;

      const data = {
        ...state.data,
        [id]: { ...state.data[id], cart: Number(state.data[id].cart) - 1 },
      };
      const cart = cartFilter(data);

      return { data, cart };
    }
    case "removeFromCart": {
      const id = action.payload;

      const data = {
        ...state.data,
        [id]: { ...state.data[id], cart: 0 },
      };

      const cart = cartFilter(data);

      return { data, cart };
    }
    case "emptyCart": {
      const data = Object.entries({ ...state.data }).reduce((acc, cur) => {
        return { ...acc, [cur[0]]: { ...cur[1], cart: 0 } };
      }, {});
      return { data, cart: [] };
    }
    default:
      return state;
  }
};

type State = {
  data: DataObject;
  cart: Data[];
};

const initialState = {
  data: {
    0: {
      category: "",
      description: "",
      id: 0,
      image: "",
      price: 0,
      rating: { rate: 0, count: 0 },
      title: "",
      cart: 0,
    },
  },
  cart: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "fetchData", payload: fetchData(json) });
      });
  }, []);

  const cartFuncs = {
    addToCart: (id: number) => {
      dispatch({ type: "addToCart", payload: id });
    },
    subtractFromCart: (id: number) => {
      dispatch({ type: "subtractFromCart", payload: id });
    },
    removeFromCart: (id: number) => {
      dispatch({ type: "removeFromCart", payload: id });
    },
    emptyCart: () => {
      dispatch({ type: "emptyCart" });
    },
  };

  return (
    <BrowserRouter>
      <Header cart={state.cart} cartFuncs={cartFuncs} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop"
            element={<Shop data={state.data} cartFuncs={cartFuncs} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/cart"
            element={<Payment cart={state.cart} cartFuncs={cartFuncs} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
