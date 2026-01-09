/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utilis/helpers";

/* eslint-disable react/react-in-jsx-scope */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-b border-stone-200 py-3 last:border-none">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-stone-700">
          <span className="mr-1 font-semibold">{quantity}×</span>
          {name}
        </p>

        <p className="text-sm font-semibold text-stone-800">
          {formatCurrency(totalPrice)}
        </p>
      </div>

      {/* Optional ingredients section (future-proof styling) */}
      {ingredients && !isLoadingIngredients && (
        <p className="mt-1 text-xs text-stone-500">{ingredients.join(", ")}</p>
      )}

      {isLoadingIngredients && (
        <p className="mt-1 text-xs italic text-stone-400">
          Loading ingredients…
        </p>
      )}
    </li>
  );
}

export default OrderItem;
