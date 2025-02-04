import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";

import Homepage from "./Homepage/Homepage";
import Cart from "./Cart/Cart";
import Shop from "./Shop/Shop";
import Contacts from "./Contacts/Contacts";
import { DataObject, InitialData } from "./Helpers";

const fetchData = (json: InitialData[]) => {
  return json.reduce((acc, cur) => {
    return { ...acc, [cur.id]: { ...cur, cart: 0 } };
  }, {});
};

function App() {
  const [data, setData] = useState<DataObject>({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(fetchData(json)));
  }, []);

  const addToCart = (id: number) => {
    setData((data) => {
      const cart = Number(data[id as keyof DataObject].cart) + 1;
      return { ...data, [id]: { ...data[id], cart } };
    });
  };

  const subtractFromCart = (id: number) => {
    setData((data) => {
      const item = Number(data[id as keyof DataObject].cart);

      if (item === 0) return data;

      const cart = item - 1;
      return { ...data, [id]: { ...data[id], cart } };
    });
  };

  const removeFromCart = (id: number) => {
    setData((data) => {
      return { ...data, [id]: { ...data[id], cart: 0 } };
    });
  };

  const emptyCart = () => {
    setData((data) => {
      return Object.entries({ ...data }).reduce((acc, cur) => {
        return { ...acc, [cur[0]]: { ...cur[1], cart: 0 } };
      }, {});
    });
  };

  return (
    <BrowserRouter>
      <Header data={data}/>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Shop"
            element={
              <Shop
                data={data}
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/Contacts" element={<Contacts />} />
          <Route
            path="/Cart"
            element={
              <Cart
                data={data}
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
