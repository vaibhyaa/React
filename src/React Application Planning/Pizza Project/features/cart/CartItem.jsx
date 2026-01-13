/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utilis/helpers";
import { deleteItem } from "./cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function CartItem({ item }) {
  const dispatch = useDispatch();

  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm mx-1 my-2">
      {/* Left: item info */}
      <p className="text-sm font-medium text-gray-800">
        <span className="font-semibold">{quantity}×</span> {name}
      </p>

      {/* Right: price */}
      <div className="text-sm font-semibold text-gray-900">
        {formatCurrency(totalPrice)}
      </div>

      {/* <DeleteItem pizzaId={pizzaId} /> */}
 className="
    inline-flex items-center justify-center
    rounded-full
    bg-yellow-400
    px-4 py-2
    text-sm font-semibold uppercase tracking-wide
    text-stone-800
    transition-all duration-300
    hover:bg-yellow-300
    focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:bg-yellow-200
    disabled:text-stone-500
    disabled:hover:bg-yellow-200
  "      <button
       
        onClick={() => dispatch(deleteItem(pizzaId))}
      >
        Delete
      </button>
    </li>
  );
}

export default CartItem;
