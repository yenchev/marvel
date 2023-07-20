import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const _apiUrlCharacters = "https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=200&apikey=bce6ca9570f4f680692a66a6083461ce";

const _apiUrlComics = "https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=bce6ca9570f4f680692a66a6083461ce";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch(_apiUrlCharacters)
      .then((response) => response.json())
      .then((data) => {
        const charactersData = data.data.results;
        setCharacters(charactersData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch(_apiUrlComics)
      .then((response) => response.json())
      .then((data) => {
        const comicsData = data.data.results;
        setComics(comicsData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/marvel" element={<MainPage characters={characters} />} />
          <Route path="comics" element={<ComicsPage comics={comics} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
