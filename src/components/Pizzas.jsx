import React from "react";
import { pizzaData } from "../data";

export default function Pizza() {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza) => {
        return (
          <li className="pizza">
            <img src={pizza.photoName} alt="" />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.price}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
