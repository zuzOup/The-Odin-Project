import { CartFuncs, getFutureDate, roundPrice } from "../../helpers";
import CouponSVG from "../SVG/CouponSVG";

function Summary({
  totalPrice,
  cartFuncs,
}: {
  totalPrice: string;
  cartFuncs: CartFuncs;
}) {
  const rickRollHandle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    cartFuncs.emptyCart();
    window.open(e.currentTarget.dataset.other, "_blank");
  };

  return (
    <div id="summary">
      <h2>Order Summary</h2>
      <ul>
        <li>
          <p>Price</p>
          <p>${totalPrice}</p>
        </li>
        <li>
          <p>Discount</p>
          <p>$0.00</p>
        </li>
        <li>
          <p>Shipping</p>
          <p className="free">$9.99</p>
        </li>
        <li>
          <p>Coupon Applied</p>
          <p>$0.00</p>
        </li>
      </ul>
      <hr />
      <div className="total">
        <p>TOTAL</p>
        <p>${roundPrice(Number(totalPrice) + 9.99)}</p>
      </div>
      <div className="delivery">
        Estimated Delivery by <b>{getFutureDate()}</b>
      </div>
      <div className="coupon">
        <input placeholder="Coupon Code"></input>
        <CouponSVG />
      </div>
      <a
        onClick={rickRollHandle}
        href="definitely NOT Rickroll"
        data-other="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
      >
        <div>PROCEED TO CHECKOUT</div>
      </a>
    </div>
  );
}

export default Summary;
