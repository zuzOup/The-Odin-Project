import { CartFuncs, DataObject } from "../Helpers";
import Item from "./Item";

type Props = {
  data: DataObject;
  cartFuncs: CartFuncs;
};

function Shop({ data, cartFuncs }: Props) {
  return (
    <div>
      shop
      {Object.values(data).map((x) => (
        <Item
          key={x.id}
          title={x.title}
          url={x.image}
          cartValue={x.cart}
          addToCart={() => cartFuncs.addToCart(x.id)}
          subtractFromCart={() => cartFuncs.subtractFromCart(x.id)}
          removeFromCart={() => cartFuncs.removeFromCart(x.id)}
        />
      ))}
    </div>
  );
}

export default Shop;
