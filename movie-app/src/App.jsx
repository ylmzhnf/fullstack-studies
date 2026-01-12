import React from "react";
import Search from "./component/Search";

const App = () => {
  return (
    <main>
      <header>
        <img src="./public/hero.png" alt="Hero Banner" />
        <h1>
          Find <span className="text-gradient">Movies</span> You'll Love Without
          the Hassle
        </h1>
        <Search/>
      </header>
    </main>
  );
};

export default App;
