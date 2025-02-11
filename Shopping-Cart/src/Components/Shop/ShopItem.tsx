import { useRef, useState } from "react";
import { CartSVG } from "../SVG/CartSVG";
import { TrashSVG } from "../SVG/TrashSVG";

type Props = {
  title: string;
  url: string;
  price: string;
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
    price,
    cartValue,
    addToCart,
    subtractFromCart,
    removeFromCart,
    changeAmount,
  } = props;

  const [amount, setAmount] = useState<number | string>(cartValue === 0 ? "" : cartValue);
  const [glow, setGlow] = useState("");

  const timeoutRef = useRef<number | null>(null);

  const glowFunc = () => {
    setGlow("glow");
    setTimeout(() => {
      timeoutRef.current = setTimeout(() => {
        setGlow("");
      }, 100);
    });
  };

  const inputKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    changeAmount(Number(amount));
    setAmount((amount) => {
      if (Number(amount) === 0) return "";
      return amount;
    });

    glowFunc();
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === 0) {
      setAmount("");
      e.target.value = "";
    }
    setAmount(Number(e.target.value));
  };

  const buttonHandler = () => {
    setAmount(1);
    addToCart();
  };

  const addToCartButton = () => {
    setAmount((amount) => Number(amount) + 1);
    addToCart();
    glowFunc();
  };

  const subtractFromCartButton = () => {
    setAmount((amount) => {
      if (Number(amount) - 1 === 0) return "";
      return Number(amount) - 1;
    });
    subtractFromCart();
    glowFunc();
  };

  const removeFromCartButton = () => {
    setAmount("");
    removeFromCart();
  };

  return (
    <div className="item">
      <div className="item-img">
        <img src={url} />
      </div>
      <div className="item-title">
        <h2>{title}</h2>
      </div>

      <h3>${price}</h3>

      {cartValue === 0 && (
        <button className="item-button-addToCart item-button" onClick={buttonHandler}>
          Add to Cart
        </button>
      )}

      {cartValue !== 0 && (
        <div className="item-cartHandlers">
          <div className={`item-input-container ${glow}`}>
            <label>
              <CartSVG />
            </label>
            <input
              min="0"
              placeholder="0"
              value={amount}
              type="number"
              onChange={inputChangeHandler}
              onKeyDown={inputKeyHandler}
            ></input>
          </div>
          <div className="item-button-container">
            <button onClick={addToCartButton} className="item-button">
              +
            </button>
            <button onClick={subtractFromCartButton} className="item-button">
              -
            </button>
            <button onClick={removeFromCartButton} className="item-button">
              <TrashSVG />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopItem;
