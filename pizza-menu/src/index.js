import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas && (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoPath={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza(props) {

  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoPath} alt={props.name} />
      <div>
        <h3> {props.name} </h3>
        <p>{props.ingredients}</p>
        {props.soldOut ? <span> Sold Out </span> : <span>{props.price}</span>}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>Sorry, we're currently closed. We open at {openHour}:00 PM.</p>
      )}
      <p></p>
    </footer>
  );
}

//Pode ser Order(props) e props.openHour e props.closeHour
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 PM to {closeHour}:00 PM. Call us at (11)
        1234-5678 to place an order.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//StrictMode renders components twice to detect side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
