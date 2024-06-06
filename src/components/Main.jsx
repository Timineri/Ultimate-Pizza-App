import React from "react";
import Pizza from "./Pizzas";
import { pizzaData } from "../data";

export default function Main() {
  // const pizzaData = [];
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <Pizza />
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
