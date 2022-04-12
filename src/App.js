import QuoteCard from "./components/QuoteCard";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import "./App.scss";

function App() {
  const [showSimpson, setShowSimpson] = useState();

  const simpson = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((resp) => resp.data)
      .then((data) => {
        setShowSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <button className="button" type="button" onClick={simpson}>
        <p>CHANGE NOW!!!</p>
      </button>
      {showSimpson && <QuoteCard {...showSimpson} />}
    </div>
  );
}

export default App;
