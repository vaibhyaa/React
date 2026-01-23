/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utilis/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

function CartItem({ item }) {
  // console.log(item);

  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
      {/* LEFT: name & quantity */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-stone-800">{name}</p>
        <span className="text-xs text-stone-500">Quantity: {quantity}</span>
      </div>

      {/* CENTER: price */}
      <div className="text-sm font-bold text-stone-900">
        {formatCurrency(totalPrice)}
      </div>

      {/* RIGHT: delete */}
      <div className="mt-3 flex items-center justify-between rounded-lg bg-stone-50 p-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-stone-800 transition hover:bg-yellow-300"
            disabled={quantity <= 0}
          >
            −
          </button>

          <button
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-stone-800 transition hover:bg-yellow-300"
            disabled={quantity <= 0}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 transition hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={() => dispatch(deleteItem(pizzaId))}
        aria-label="Delete item"
      >
        ✕
      </button>
    </li>
  );
}

export default CartItem;
