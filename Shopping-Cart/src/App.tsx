import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataObject, initialData, Data, cartFilter, fetchData } from "./Helpers";

import Header from "./Header";
import Homepage from "./Homepage/Homepage";
import Cart from "./Cart/Cart";
import Shop from "./Shop/Shop";
import Contacts from "./Contacts/Contacts";

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
  data: initialData,
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

  const addToCart = (id: number) => {
    dispatch({ type: "addToCart", payload: id });
  };

  const subtractFromCart = (id: number) => {
    dispatch({ type: "subtractFromCart", payload: id });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "removeFromCart", payload: id });
  };

  const emptyCart = () => {
    dispatch({ type: "emptyCart" });
  };

  return (
    <BrowserRouter>
      <Header
        data={state.data}
        addToCart={addToCart}
        subtractFromCart={subtractFromCart}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
      />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Shop"
            element={
              <Shop
                data={state.data}
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/Contacts" element={<Contacts />} />
          <Route
            path="/Paymenet"
            element={
              <Cart
                data={state.data}
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
