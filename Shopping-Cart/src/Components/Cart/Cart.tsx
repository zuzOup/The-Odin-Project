import { totalPrice, Data, CartFuncs } from "../../helpers";
import CartItems from "../CartItems";
import Summary from "./Summary";

import "./cart.css";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
};

function Cart({ cart, cartFuncs }: Props) {
  return (
    <div id="cart">
      <div className="cart-cart">
        <h2>
          Cart <span>{cart.length} Items</span>
        </h2>
        <CartItems cart={cart} cartFuncs={cartFuncs} />
      </div>
      <Summary totalPrice={totalPrice(cart)} cartFuncs={cartFuncs} />
    </div>
  );
}

export default Cart;

{
  /* <div>Total Price :${totalPrice(cart)}</div>; */
}
