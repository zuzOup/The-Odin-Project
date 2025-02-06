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

  const [amount, setAmount] = useState<number | string>(cartValue === 0 ? "" : cartValue);

  const inputKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    changeAmount(Number(amount));
    setAmount((amount) => {
      if (Number(amount) === 0) return "";
      return amount;
    });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === 0) {
      setAmount("");
      e.target.value = "";
    }
    setAmount(Number(e.target.value));
  };

  const buttonHandler = () => {
    if (amount === "") {
      setAmount(1);
      addToCart();
    } else if (Number(amount) === 0) {
      setAmount("");
      changeAmount(0);
    } else {
      changeAmount(Number(amount));
    }
  };

  const addToCartButton = () => {
    setAmount((amount) => Number(amount) + 1);
    addToCart();
  };

  const subtractFromCartButton = () => {
    setAmount((amount) => {
      if (Number(amount) - 1 === 0) return "";
      return Number(amount) - 1;
    });
    subtractFromCart();
  };

  const removeFromCartButton = () => {
    setAmount("");
    removeFromCart();
  };

  return (
    <div className="item">
      <div>{title}</div>
      <img src={url} />
      <label>
        Number in cart:
        <input
          min="0"
          placeholder="0"
          value={amount}
          type="number"
          onChange={inputChangeHandler}
          onKeyDown={inputKeyHandler}
        ></input>
      </label>
      {cartValue === 0 && <button onClick={buttonHandler}>Add 1 to Cart</button>}
      {cartValue !== 0 && (
        <button disabled={cartValue === Number(amount)} onClick={buttonHandler}>
          Update
        </button>
      )}
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
