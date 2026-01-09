/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg bg-stone-100 p-6 text-center shadow-sm">
      <Link
        to="/menu"
        className="mb-4 inline-block text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
      >
        &larr; Back to menu
      </Link>

      <p className="text-lg font-semibold text-stone-700">
        Your cart is still empty 🍕
      </p>

      <p className="mt-2 text-sm text-stone-500">
        Start adding some delicious pizzas to place your order.
      </p>
    </div>
  );
}

export default EmptyCart;
