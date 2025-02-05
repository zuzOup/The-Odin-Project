import { Link } from "react-router";

import { DataObject } from "./Helpers";
import CartModal from "./Cart/CartModal";

interface Props {
  data: DataObject;
  addToCart: (id: number) => void;
  subtractFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
}

const cartAmount = (data: DataObject) => {
  return Object.values(data)
    .filter((x) => x.cart !== 0)
    .reduce((acc, cur) => {
      return acc + cur.cart;
    }, 0);
};

function Header(props: Props) {
  const { data, addToCart, subtractFromCart, removeFromCart, emptyCart } = props;

  return (
    <header>
      <h1></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>

        <Link to="/Contacts">Contact</Link>
        <button>Cart {cartAmount(data)}</button>
        <CartModal
          data={data}
          addToCart={addToCart}
          subtractFromCart={subtractFromCart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
        />
      </nav>
    </header>
  );
}

export default Header;
