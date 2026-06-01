import Header from "./componants/Header";
import Footer from "./componants/Footer";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUS from "./pages/ContactUS";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
