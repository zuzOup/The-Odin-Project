import { useEffect, useState } from "react";
import { DataObject } from "../Helpers";
import CartItem from "./CartItems";

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

function CartModal({
  data,
  addToCart,
  subtractFromCart,
  removeFromCart,
  emptyCart,
}: Props) {
  const [cart, setCart] = useState(cartFilter(data));

  useEffect(() => {
    setCart(cartFilter(data));
  }, [data]);

  return (
    <div>
      <div>
        {Object.values(cart).map((x) => {
          return (
            <CartItem
              key={x.id}
              title={x.title}
              amount={x.cart}
              totalPrice={x.price * x.cart}
              addToCart={() => addToCart(x.id)}
              subtractFromCart={() => subtractFromCart(x.id)}
              removeFromCart={() => removeFromCart(x.id)}
            />
          );
        })}
      </div>
      <button onClick={emptyCart}> Empty Cart</button>
    </div>
  );
}

export default CartModal;
