import { useState } from "react";
import quotes from "./quotes.json";
import "./App.css";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871",
  "#548A66",
  "#275F69",
  "#2F4858",
  "#C2A45E",
];

function App() {
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };
  const ramdonColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[ramdonColorIndex];
  document.body.style = `background: ${color}`;

  return (
    <div className="App">
      <div className="card" style={{ color: color }}>
        <p>
          <i className="fa-solid fa-quote-left"></i>
          {quotes[index].quote}
        </p>
        <p className="author">{quotes[index].author}</p>
        <div className="button2">
          <button
            onClick={changeQuote}
            style={{ color: "black", backgroundColor: color }}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
