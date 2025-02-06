import { useState } from "react";

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

  const [amount, setAmount] = useState<number>(cartValue);

  const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    changeAmount(amount);
  };

  const addToCartButton = () => {
    setAmount((amount) => amount + 1);
    subtractFromCart();
  };

  const subtractFromCartButton = () => {
    setAmount((amount) => {
      if (amount === 0) return 0;
      return amount - 1;
    });
    addToCart();
  };

  const removeFromCartButton = () => {
    setAmount(0);
    removeFromCart();
  };

  return (
    <div className="item">
      <div>{title}</div>
      <img src={url} />
      <label>
        Number in cart:
        <input
          value={amount}
          type="number"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          onKeyDown={inputHandler}
        ></input>
      </label>
      {cartValue === 0 && <button onClick={() => changeAmount(amount)}></button>}
      {cartValue !== 0 && (
        <>
          <button onClick={addToCartButton}>ADD 1 </button>
          <button onClick={subtractFromCartButton}>-- 1 </button>
          <button onClick={removeFromCartButton}>Remove from cart </button>
        </>
      )}
    </div>
  );
}

export default ShopItem;
