import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const App = () => {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="comics" element={<ComicsPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
