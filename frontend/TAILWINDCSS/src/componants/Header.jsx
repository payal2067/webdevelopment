import { Form, Link } from "react-router-dom";
import headerlogo from "../assets/images/header-logo.png";
function Header() {
  return (
    <>
      <div className="">
        <div className="">
          <Link to={"./"}>
            <img src={headerlogo} alt="Login" className="header-img" />
          </Link>
        </div>

        <div className="">
          <Link to={"/login"}>
            <button className="btn ">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
