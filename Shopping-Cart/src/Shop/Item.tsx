type Props = {
  title: string;
  url: string;
  cartValue: number;
  addToCart: () => void;
  subtractFromCart: () => void;
  removeFromCart: () => void;
};

function Item({
  title,
  url,
  cartValue,
  addToCart,
  subtractFromCart,
  removeFromCart,
}: Props) {
  return (
    <div className="item">
      <div>{title}</div>
      <img src={url} />
      <div>NUMBER IN CART {cartValue}</div>
      <button onClick={addToCart}>ADD 1 </button>
      <button onClick={subtractFromCart}>-- 1 </button>
      <button onClick={removeFromCart}>Remove from cart </button>
    </div>
  );
}

export default Item;
