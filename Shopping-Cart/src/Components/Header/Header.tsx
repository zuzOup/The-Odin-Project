import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { cartAmount, cartAmountButton, CartFuncs, Data } from "../../helpers";



import "./header.css";
import { CartSVG } from "../SVG/CartSVG";
import CartModal from "./Modal/CartModal";

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

  const closeModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element = e.relatedTarget as HTMLInputElement;

    if (element.id === "modal" || element.id === "cart-button") return;

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
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        The Shop
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div className="cart-button-container">
          <button
            className={`${location.pathname.includes("cart")}`}
            id="cart-button"
            disabled={location.pathname.includes("cart")}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            onClick={cartNavigate}
          >
            <CartSVG />
            {cartAmount(cart) !== 0 && <div>{cartAmountButton(cart)}</div>}
          </button>
          <div className="modal-container">
            <CartModal
              cart={cart}
              cartFuncs={cartFuncs}
              setVisible={setVisible}
              visible={visible}
              closeModal={closeModal}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
