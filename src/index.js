// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

//

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "40px" };
//   const style = {};
//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co. </h1>
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   // const pizzas = [];
//   const numPizza = pizzas.length;

//   return (
//     <main className="menu">
//       <h2>Our menu</h2>

//       {numPizza > 0 ? (
//         <React.Fragment>
//           <p>
//             Authentic Italian cuisine. 6 creative dishes to choose from. All
//             from our stone oven, all organic, all delicious.
//           </p>

//           <ul className="pizzas">
//             {pizzaData.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </React.Fragment>
//       ) : (
//         <p>We're still working on our menu. Please come back later :)</p>
//       )}

//       {/* <Pizza
//         name="Focaccia"
//         ingredients="Bread with italian olive oil and rosemary"
//         price={6}
//         photoName="pizzas/focaccia.jpg"
//       />
//       <Pizza
//         name="Pizza Margherita"
//         ingredients="Tomato and mozarella"
//         price={10}
//         photoName="pizzas/margherita.jpg"
//       /> */}
//     </main>
//   );
// }

// function Pizza({ pizzaObj }) {
//   // if (pizzaObj.soldOut) return null;
//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         <span>{pizzaObj.soldOut ? <span>SOLD OUT</span> : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);
//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} openHour={openHour} />
//       ) : (
//         <p>
//           We're happy to welcome you between {openHour}:00 and {closeHour}:00
//         </p>
//       )}
//     </footer>
//   );
//   // return React.createElement("footer", null, "We're Open");
// }

// function Order({ closeHour, openHour }) {
//   return (
//     <div className="order">
//       <p>
//         We're open fron {openHour}:00 until {closeHour}:00. Come visit us or
//         order online.
//       </p>
//       <button className="btn">Order Now</button>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
