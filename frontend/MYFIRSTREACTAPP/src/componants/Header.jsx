import { Form, Link } from "react-router-dom";
import logoLight from "../assets/logo-light.png";
function Header() {
  return (
    <>
      <div className="header p-2 d-flex justify-content-between align-items-center">
        <div className=" fs-4 fw-bold">
          <Link to={"/home"}>
            <img src={logolight} alt="" />
          </Link>
        </div>
        // import contactImage from "./assets/contactPage.jpg";
        {/*  <img src={contactImage} alt="" className="w-100" /> */}
        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-Login btn-outline-primary">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-light">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
