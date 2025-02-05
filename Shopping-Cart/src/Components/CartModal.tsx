import { useNavigate } from "react-router";
import { Data, CartFuncs } from "../helpers";

import CartItems from "./CartItems";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  visible: string;
};

function CartModal({ cart, cartFuncs, setVisible, visible }: Props) {
  const navigate = useNavigate();

  const handleCart = () => {
    setVisible("hidden");

    navigate("/cart");
  };

  return (
    <div className={visible} id="modal">
      <button onClick={() => setVisible("hidden")}>Hide Modal</button>
      <CartItems cart={cart} cartFuncs={cartFuncs} />
      <button onClick={cartFuncs.emptyCart}> Empty Cart</button>
      <button onClick={handleCart}>Pay</button>
    </div>
  );
}

export default CartModal;
