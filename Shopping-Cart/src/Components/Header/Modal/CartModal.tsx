import { useLocation, useNavigate } from "react-router";

import { CartFuncs, Data } from "../../../helpers";

import CartItems from "../../CartItems";

import "./cartModal.css";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  visible: string;
  closeModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function CartModal({ cart, cartFuncs, setVisible, visible, closeModal }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCart = () => {
    setVisible("hidden");
    navigate("./cart");
  };

  const handleShop = () => {
    if (location.pathname !== "/shop") navigate("./shop");
    setVisible("hidden");
  };

  return (
    <div className={visible} id="modal" onMouseLeave={closeModal}>
      <div id="modal-content">
        {cart.length > 0 && (
          <div>
            <CartItems cart={cart} cartFuncs={cartFuncs} />
            <button onClick={handleCart} className="modal-button">
              View Cart and Pay
            </button>
          </div>
        )}
        {cart.length === 0 && (
          <div id="modal-empty">
            <div>Your shopping cart is empty</div>
            <button onClick={handleShop} className="modal-button">
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
