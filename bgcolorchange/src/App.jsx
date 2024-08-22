import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setBg] = useState("white");
  // const handleBg = (value) => {
  //   setBg(value);
  // };
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bg }}>
      <h2 className="text-center text-white bg-black px-4 py-4">
        BG Change Button inn (REACT)
      </h2>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBg("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setBg("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setBg("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setBg("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "olive" }}
            onClick={() => setBg("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "pink" }}
            onClick={() => setBg("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "purple" }}
            onClick={() => setBg("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setBg("black")}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
