import { Link, useNavigate } from "react-router";
import { Data, CartFuncs } from "../helpers";

import CartItems from "./CartItems";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  visible: string;
  
};

function CartModal({ cart, cartFuncs, setVisible, visible,  }: Props) {
  const navigate = useNavigate();

  const handleCart = () => {
    setVisible("hidden");

    navigate("/cart");
  };

  return (
    <div className={visible} id="modal">
      {/* <button onClick={() => setVisible("hidden")}>Hide Modal</button> */}
      <CartItems cart={cart} cartFuncs={cartFuncs} />
      {cart.length > 0 && <button onClick={handleCart}>View Cart and Pay</button>}
      {cart.length === 0 && (
        <>
          <div>Your shopping cart is empty</div>
          <Link to="/shop">Continue shopping</Link>
        </>
      )}
    </div>
  );
}

export default CartModal;
