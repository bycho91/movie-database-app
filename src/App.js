import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Footer, Header, MovieList } from "./components";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("harry potter");

  const changeSearchTerm = (movie) => {
    setSearchTerm(movie);
  };

  return (
    <div className="app">
      <Router>
        <Header changeSearchTerm={changeSearchTerm} />
        <MovieList searchTerm={searchTerm} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
