import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { cartAmount, cartAmountButton, CartFuncs, Data } from "../helpers";

import CartModal from "./CartModal";

import "./header.css";

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
    console.log(1);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
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
