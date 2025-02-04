import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Cart from "./Cart/Cart";
import Shop from "./Shop/Shop";
import Contacts from "./Contacts/Contacts";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials")
      .then((res) => res.json())
      .then((json) => setState(json.data));
  }, []);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Homepage />,
  //   },
  //   {
  //     path: "Cart",
  //     element: <Cart />,
  //   },
  //   {
  //     path: "Shop",
  //     element: <Shop prop={state} />,
  //   },
  //   {
  //     path: "Contacts",
  //     element: <Contacts />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <nav>
        {" "}
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Contacts">Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shop" element={<Shop prop={state} />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </main>
      {/* <RouterProvider router={router} /> */}
     
    </BrowserRouter>
  );
}

export default App;
