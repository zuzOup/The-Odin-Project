interface Props {
  title: string;
  amount: number;
  totalPrice: number;
  addToCart: () => void;
  subtractFromCart: () => void;
  removeFromCart: () => void;
}

function CartItems(props: Props) {
  const { title, amount, totalPrice, addToCart, subtractFromCart, removeFromCart } =
    props;

  return (
    <div>
      <div>{title}</div>
      <div> Amount : {amount}</div>
      <div> Price : {totalPrice}</div>
      <button onClick={addToCart}>++ </button>
      <button onClick={subtractFromCart}>-- </button>
      <button onClick={removeFromCart}></button>
    </div>
  );
}

export default CartItems;
