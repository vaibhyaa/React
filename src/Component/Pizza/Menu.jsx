/* eslint-disable no-unused-vars */
// import React from "react";
import PizzaComponent from "./PizzaComponent";
import "./Pizza.css";
import pizzaData from "./data.json";
import Description from "./Description";

const Menu = () => {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      <Description />

      {/* this is description component */}

      {/* this hard coded each components  */}
      {/* <PizzaComponent
        img="\public\Pizzas\focaccia.jpg"
        name={pizzaData.pizzas[0].name}
        ingredients={pizzaData.pizzas[0].ingredients}
      />
      <PizzaComponent
        img="\public\Pizzas\margherita.jpg"
        name={pizzaData.pizzas[1].name}
        ingredients={pizzaData.pizzas[1].ingredients}
      /> */}

      {/* applied two ways  */}
      {/* 1) */}
      {/* here we have rendered over data and created each component depends on how much data is present */}
      {/* {pizzaData.pizzas.map((eachPizza) => (
        <PizzaComponent
          key={eachPizza.name}
          img={eachPizza.photoName}
          name={eachPizza.name}
          ingredients={eachPizza.ingredients}
        />
      ))} */}

      {/* 2) */}
      {/* <ul className="pizzas">
        {pizzaData.pizzas.map((eachPizza) => (
          <PizzaComponent key={eachPizza.name} pizzaObj={eachPizza} />
        ))}
      </ul> */}

      {/*conitional rendering */}
      {/* AND operator always pass truthy expression here not num value  */}
      {/* {pizzaData.pizzas && (
        <ul className="pizzas">
          {pizzaData.pizzas.map((eachPizza) => (
            <PizzaComponent key={eachPizza.name} pizzaObj={eachPizza} />
          ))}
        </ul>
      )} */}

      {/* ternary operator  */}
      {/* here array present/length is greater than zero  if present then render first if not the render second  */}
      {/* conditional rendering with ternaried example */}
      {pizzaData.pizzas.length > 0 ? (
        <>
          <ul className="pizzas">
            {pizzaData.pizzas.map((eachPizza) => (
              <PizzaComponent key={eachPizza.name} pizzaObj={eachPizza} />
            ))}
          </ul>
        </>
      ) : (
        <h1>
          may be pizza array is present but no elements in that pizza array{" "}
        </h1>
      )}

      {/* here  array is present then render first if not the render second  */}
      {/* {pizzaData.pizzas ? (
        <>
         <Description />
        <ul className="pizzas">
          {pizzaData.pizzas.map((eachPizza) => (
            <PizzaComponent key={eachPizza.name} pizzaObj={eachPizza} />
          ))}
        </ul>
          </>
      ) : (
            <h1>No array of pizza is preent </h1>
      )} */}
    </main>
  );
};

export default Menu;
