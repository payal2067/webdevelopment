import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componants/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
