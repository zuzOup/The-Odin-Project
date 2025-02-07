import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { cartAmount, cartAmountButton, CartFuncs, Data } from "../helpers";

import CartModal from "./CartModal";

import "./header.css";
import { CartSVG } from "./SVG/CartSVG";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
};

function Header({ cart, cartFuncs }: Props) {
  const [visible, setVisible] = useState<string>("hidden");

  const timeoutRef = useRef<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (location.pathname.includes("cart")) return;
    setVisible("visible");
  };

  const closeModal = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible("hidden");
    }, 300);
  };

  const cartNavigate = () => {
    setVisible("hidden");
    navigate("/cart");
  };

  return (
    <header>
      <h1>The Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contacts">Contact</Link>
        <div
          className={`${location.pathname.includes("cart")} nav-button-cart`}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          <button onClick={cartNavigate} disabled={location.pathname.includes("cart")}>
            <CartSVG />
            {cartAmount(cart) !== 0 && <div>{cartAmountButton(cart)}</div>}
          </button>
          <div className="modal-container">
            <CartModal
              cart={cart}
              cartFuncs={cartFuncs}
              setVisible={setVisible}
              visible={visible}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
