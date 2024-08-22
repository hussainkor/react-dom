import { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [bg, setBg] = useState("black");

  const handleBg = (value) => {
    setBg(value);
  };

  return (
    <div className="main" style={{ backgroundColor: bg }}>
      <h2 className="bg-green-100 p-1.5">Tailwind</h2>
      <p>{count}</p>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => handleBg("blue")}
      >
        Blue
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => handleBg("red")}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => handleBg("green")}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => handleBg("yellow")}
      >
        Yellow
      </button>
      <button
        style={{ backgroundColor: "olive" }}
        onClick={() => handleBg("olive")}
      >
        Olive
      </button>
      <button
        style={{ backgroundColor: "pink" }}
        onClick={() => handleBg("pink")}
      >
        Pink
      </button>
      <button
        style={{ backgroundColor: "purple" }}
        onClick={() => handleBg("purple")}
      >
        Purple
      </button>
      <button
        style={{ backgroundColor: "white" }}
        onClick={() => handleBg("white")}
      >
        White
      </button>
    </div>
  );
}

export default App;
