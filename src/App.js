import React, { useState } from "react";
import MyNav from "./components/Nav";
import WordCount from "./components/CounterPage";

function App() {
  const [Mode, setMode] = useState("light");

  function toggleMode() {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "ghostwhite";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "ghostwhite";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <MyNav Mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <WordCount Mode={Mode} heading="Enter your text to analyze" />
      </div>
    </>
  );
}

export default App;
