import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b540e74f4a648fe85b08038e322b971"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      <h1>News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
