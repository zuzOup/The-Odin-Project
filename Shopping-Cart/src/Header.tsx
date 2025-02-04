import { Link } from "react-router";

import { DataObject } from "./Helpers";

const cartAmount = (data: DataObject) => {
  return Object.values(data)
    .filter((x) => x.cart !== 0)
    .reduce((acc, cur) => {
      return acc + cur.cart;
    }, 0);
};

function Header({ data }: { data: DataObject }) {
  return (
    <header>
      <h1></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Contacts">Contact</Link>
        <button>Cart {cartAmount(data)}</button>
      </nav>
    </header>
  );
}

export default Header;
