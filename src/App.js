import Button from "./components/buttons/Button";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    if (e.target.value === "next") {
      console.log("clicked");

      if (count < 16) {
        setCount((count) => count + 5);
      } else {
        setCount(1);
      }
    }
    if (e.target.value === "previous") {
      if (count > 1) {
        setCount(count - 5);
      } else {
        setCount(16);
      }
    }
  };
  return (
    <div className="app">
      <div className="app-alt">
        <Header count={count} />
        <Cards count={count} />
        <Button func={handleClick} />
      </div>
    </div>
  );
}

export default App;
