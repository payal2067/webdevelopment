import React from "react";
import Header from "./componants/Header";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Products from "./pages/Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
