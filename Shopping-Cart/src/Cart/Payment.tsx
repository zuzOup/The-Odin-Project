import { CartFuncs, Data, totalPrice } from "../Helpers";
import CartItems from "./CartItems";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
};

function Payment({ cart, cartFuncs }: Props) {
  return (
    <div>
      <div id="payment">
        <CartItems cart={cart} cartFuncs={cartFuncs} />
        <button onClick={cartFuncs.emptyCart}> Empty Cart</button>
        <div>Total Price :${totalPrice(cart)}</div>
      </div>
      <div>Mock Payment side</div>
    </div>
  );
}

export default Payment;
