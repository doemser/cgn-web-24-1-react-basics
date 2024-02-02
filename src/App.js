import Buttons from "./components/Buttons.js";
import "./App.css";

const fruits = ["apple", "banana", "mango"];

export default function App() {
  const something = "Something";
  const apple = fruits.find((fruit) => fruit === "apple");

  // returning is not HTML but JSX
  return (
    <div className="App">
      <header></header>
      <main>
        {apple}
        <article>
          <Buttons />
          <Buttons />
          <Buttons />
        </article>
        {something}
      </main>
      <footer></footer>
    </div>
  );
}
