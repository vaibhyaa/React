/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import "./Pizza.css";
// import pizzaData from "./data.json";

const PizzaComponent = (props) => {
  // conditional rendering with multiple returns example
  // if (props.pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <>
      {/* <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div className="">
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
        </div>
      </li> */}

      {/* <ul class="pizzas"> */}
      {/* templates literals is important here */}
      <li class={`${props.pizzaObj.soldOut ? "sold-out" : "pizza"}`}>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div class="pizza-details">
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>
            <b
              style={{
                color: "red",
              }}
            >
              {props.pizzaObj.soldOut
                ? "SOLD OUT"
                : "PRICE-: " + props.pizzaObj.price}
              {/* : `PRICE-: ${props.pizzaObj.price}` */}
            </b>
          </span>
        </div>
      </li>
      {/* </ul> */}
    </>
  );
};

export default PizzaComponent;
