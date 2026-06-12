import React from "react";
import Header from "./componants/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import ContactUS from "./pages/contactUS";
import Products from "./pages/Products";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
          <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;