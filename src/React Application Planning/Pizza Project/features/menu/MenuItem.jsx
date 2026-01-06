import { formatCurrency } from "../../utilis/helpers";

/* eslint-disable react/react-in-jsx-scope */
function MenuItem({ eachPizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = eachPizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
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
