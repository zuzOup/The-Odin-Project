import { CartFuncs, Data, roundPrice } from "../helpers";

import { TrashSVG } from "./SVG/TrashSVG";

type Props = {
  cart: Data[];
  cartFuncs: CartFuncs;
};


function CartItems({ cart, cartFuncs }: Props) {
  return (
    <ul>
      {cart.map((c) => {
        return (
          <li key={c.id}>
            <div className="cartItem-title">
              <div className="cartItem-imgContainer">
                <img src={c.image} />
              </div>
              <h4>{c.title}</h4>
            </div>
            <div className="cartItem-amount">
              <div>
                <div>Quantity: {c.cart}</div>
                <div>Total: ${roundPrice(c.cart * c.price)}</div>
              </div>
              <div>
                <button onClick={() => cartFuncs.addToCart(c.id)}>+</button>
                <button onClick={() => cartFuncs.subtractFromCart(c.id)}>-</button>
                <button onClick={() => cartFuncs.removeFromCart(c.id)}>
                  <TrashSVG />
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CartItems;
