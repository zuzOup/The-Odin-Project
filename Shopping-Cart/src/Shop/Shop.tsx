import { DataObject } from "../Helpers";
import Item from "./Item";

type Props = {
  data: DataObject;
  addToCart: (id: number) => void;
  subtractFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

function Shop({ data, addToCart, subtractFromCart, removeFromCart }: Props) {
  return (
    <div>
      shop
      {Object.values(data).map((x) => (
        <Item
          key={x.id}
          title={x.title}
          url={x.image}
          cartValue={x.cart}
          addToCart={() => addToCart(x.id)}
          subtractFromCart={() => subtractFromCart(x.id)}
          removeFromCart={() => removeFromCart(x.id)}
        />
      ))}
    </div>
  );
}

export default Shop;
