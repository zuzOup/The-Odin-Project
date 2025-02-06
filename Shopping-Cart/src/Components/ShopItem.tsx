type Props = {
  title: string;
  url: string;
  cartValue: number;
  addToCart: () => void;
  subtractFromCart: () => void;
  removeFromCart: () => void;
  changeAmount: (amount: number) => void;
};

function ShopItem(props: Props) {
  const {
    title,
    url,
    cartValue,
    addToCart,
    subtractFromCart,
    removeFromCart,
    changeAmount,
  } = props;

  return (
    <div className="item">
      <div>{title}</div>
      <img src={url} />
      <label>
        Number in cart:
        <input
          value={cartValue}
          type="number"
          onChange={(e) => {
            changeAmount(Number(e.target.value));
          }}
        ></input>
      </label>
      <button onClick={addToCart}>ADD 1 </button>
      <button onClick={subtractFromCart}>-- 1 </button>
      <button onClick={removeFromCart}>Remove from cart </button>
    </div>
  );
}

export default ShopItem;
