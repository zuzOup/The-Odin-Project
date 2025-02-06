import { CartFuncs, Data, roundPrice } from "../helpers";

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
            <div>{c.title}</div>
            <img src={c.image} />
            <div> Amount : {c.cart}</div>
            <div>Price: {roundPrice(c.cart * c.price)}</div>
            <button onClick={() => cartFuncs.addToCart(c.id)}>++ </button>
            <button onClick={() => cartFuncs.subtractFromCart(c.id)}>-- </button>
            <button onClick={() => cartFuncs.removeFromCart(c.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default CartItems;
