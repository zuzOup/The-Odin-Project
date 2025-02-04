import { useEffect, useState } from "react";
import { DataObject } from "../Helpers";

type Props = {
  data: DataObject;
  addToCart: (id: number) => void;
  subtractFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
};

const cartFilter = (data: DataObject) => {
  return Object.values(data).filter((x) => x.cart !== 0);
};

function Cart({ data, addToCart, subtractFromCart, removeFromCart, emptyCart }: Props) {
  const [cart, setCart] = useState(cartFilter(data));

  useEffect(() => {
    setCart(cartFilter(data));
  }, [data]);

  return (
    <div>
      <div>
        {Object.values(cart).map((x) => {
          return (
            <div key={x.id}>
              <div>{x.title}</div>
              <div> Amount : {x.cart}</div>
              <div> Price : {x.price * x.cart}</div>
              <button onClick={() => addToCart(x.id)}>++ </button>
              <button onClick={() => subtractFromCart(x.id)}>-- </button>
              <button onClick={() => removeFromCart(x.id)}></button>
            </div>
          );
        })}
      </div>
      Total price $
      {Object.values(cart).reduce((acc, cur) => {
        return acc + cur.price * cur.cart;
      }, 0)}
      <button onClick={emptyCart}> Empty Cart</button>
    </div>
  );
}

export default Cart;
