/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utilis/helpers";

/* eslint-disable react/react-in-jsx-scope */
function MenuItem({ eachPizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = eachPizza;

  return (
    <li className="flex gap-4">
      <img src={imageUrl} alt={name} className="h-24 " />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
