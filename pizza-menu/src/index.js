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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoPath={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoPath} width={300} height={300} alt="Focaccia" />
      <div>
        <h3> {props.name} </h3>
        <p>{props.ingredients}</p>
        <span>R$: {props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) {
    alert("We're currently open!");
  } else {
    alert("We're currently closed!");
  }
  console.log("Is the restaurant open?", isOpen);

  return (
    <footer className="footer">
      <p>{new Date().toLocaleDateString()}. We're currently open!</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//StrictMode renders components twice to detect side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
