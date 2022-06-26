import { useState } from "react";
import quotes from "./quotes.json";
import "./App.css";
import Button from "./components/Button";
import Quotebox from "./components/Quotebox";

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
  const appBack = { backgroundColor: color };
  return (
    <div className="App" style={appBack}>
      <div className="card" style={{ color: color }}>
        <Quotebox quotes={quotes} index={index} />
        <Button changeQuote={changeQuote} color={color} />
      </div>
    </div>
  );
}

export default App;
