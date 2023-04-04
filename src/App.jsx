import { useEffect, useState } from "react";
import "./App.css";

const dataFetch = async () => {
  const data = await fetch();
};

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();
  // console.log(quote);

  const getRandomQuotes = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((resp) => resp.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[Math.floor(Math.random() * 1000)]);
      });
  }, []);

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div>
        <button type="button" onClick={getRandomQuotes}>
          Get New Quote
        </button>
        {quote && (
          <div className="quote__container">
            <p className="quote__text">"{quote.text}"</p>
            <p className="quote__author">Author: {quote.author}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
