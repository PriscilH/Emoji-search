import { useState } from 'react';
import './App.css';
import emojilist from "./assets/emojilist.json";

import Search from "./Components/Search";
import Line from "./Components/Line";
import Footer from "./Components/Footer";

function App() {
  const [results, setResults] = useState("");

  // fonction qui va être appelée à chaque changement dans l'input
    const newResults = [];
    for (let i = 0; i < emojilist.length; i++) {
      if (emojilist[i].keywords.includes(results) && newResults.length < 20) {
          newResults.push(emojilist[i]);
        }
        if (newResults.length === 20) {
          break; 
        }
      }

    console.log(newResults);
  return (
    <div className="Container">
      <Search results={results} setResults={setResults} />
        {/* // la méthode map va retourner autant de composants Line qu'il y a d'élément dans le tableau results */}
        {newResults.map((element, index) => {
          return <Line key={index} element={element} />;
        })}
      <Footer />
    </div>
  );
}

export default App;
