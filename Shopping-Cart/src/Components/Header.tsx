import { useState } from "react";
import { Link, useLocation } from "react-router";

import { cartAmount, CartFuncs, Data } from "../helpers";
import CartModal from "./CartModal";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
};

function Header({ cart, cartFuncs }: Props) {
  const [visible, setVisible] = useState<string>("hidden");

  const location = useLocation();

  const openModal = () => {
    if (location.pathname.includes("cart")) return;
    setVisible("visible");
  };

  return (
    <header>
      <h1></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contacts">Contact</Link>
        <button disabled={location.pathname.includes("cart")} onClick={openModal}>
          Cart {cartAmount(cart)}
        </button>
        <CartModal
          cart={cart}
          cartFuncs={cartFuncs}
          setVisible={setVisible}
          visible={visible}
        />
      </nav>
    </header>
  );
}

export default Header;
