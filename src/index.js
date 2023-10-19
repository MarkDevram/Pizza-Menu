import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
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
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  // name: "Pizza Prosciutto",
  // ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
  // price: 18,
  // photoName: "pizzas/prosciutto.jpg",
  // soldOut: false,
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p style={{ fontWeight: "bolder" }}>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          )
        })}
      </div>
    </div>
  )
}

function Footer() {
  const hr = new Date().getHours()

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {/* {hr} :{new Date().getMinutes()} -{" "}
          {hr >= 12 && hr <= 22
            ? "we are Currently open to serve"
            : "we are closed"} */}
          We're open from 12:00 to 22:00. Come visit us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  )
}
function Pizza({ name, ingredients, photoName, price, soldOut }) {
  // name={pizza.name}
  //           ingredients={pizza.ingredients}
  //           photoName={pizza.photoName}
  //           price={pizza.price}
  //           soldOut={pizza.soldOut}
  console.log(name, ingredients, photoName, price, soldOut)
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span style={{ fontWeight: "bolder" }}>
          {soldOut ? "SOLD OUT" : price}
        </span>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
