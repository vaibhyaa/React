/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utilis/helpers";

/* eslint-disable react/react-in-jsx-scope */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Left: item info */}
      <p className="text-sm font-medium text-gray-800">
        <span className="font-semibold">{quantity}×</span> {name}
      </p>

      {/* Right: price */}
      <div className="text-sm font-semibold text-gray-900">
        {formatCurrency(totalPrice)}
      </div>
    </li>
  );
}

export default CartItem;
