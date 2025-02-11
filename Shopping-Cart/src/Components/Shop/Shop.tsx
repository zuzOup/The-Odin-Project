import { CartFuncs, DataObject, roundPrice } from "../../helpers";
import ShopItem from "./ShopItem";

import "./shop.css";

type Props = {
  data: DataObject;
  cartFuncs: CartFuncs;
};

function Shop({ data, cartFuncs }: Props) {
  return (
    <div className="shop" id="shop">
      {Object.values(data).map((x) => (
        <ShopItem
          key={x.id}
          title={x.title}
          url={x.image}
          price={roundPrice(x.price)}
          cartValue={x.cart}
          addToCart={() => cartFuncs.addToCart(x.id)}
          subtractFromCart={() => cartFuncs.subtractFromCart(x.id)}
          removeFromCart={() => cartFuncs.removeFromCart(x.id)}
          changeAmount={(amount) => cartFuncs.changeAmount(x.id, amount)}
        />
      ))}
    </div>
  );
}

export default Shop;
