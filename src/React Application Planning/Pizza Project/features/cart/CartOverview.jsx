import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilis/helpers";
import { getTotalCartQuantity, getTotalCrtPrice } from "./cartSlice";

/* eslint-disable react/react-in-jsx-scope */

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCrtPrice);

  if (!totalCartQuantity) {
    return null;
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      {/* Left: cart summary */}
      <p className="flex items-center gap-4 font-semibold text-stone-300 sm:gap-6">
        <span>{totalCartQuantity} pizzas</span>
        {/* <span>$23.45</span> */}
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      {/* Right: action */}
      <Link
        to="/cart"
        className="font-semibold text-blue-400 transition-colors hover:text-blue-300"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
