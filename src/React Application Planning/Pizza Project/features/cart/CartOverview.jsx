import { Link } from "react-router-dom";

/* eslint-disable react/react-in-jsx-scope */

function CartOverview() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      {/* Left: cart summary */}
      <p className="flex items-center gap-4 font-semibold text-stone-300 sm:gap-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
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
