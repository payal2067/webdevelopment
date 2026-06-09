import { Form, Link } from "react-router-dom";
import headerlogo from "../assets/images/header-logo.png";
function Header() {
  return (
    <>
      <div className="header p-2 d-flex justify-content-between top-0 z-99 position-sticky align-items-center">
        <div className="px-5">
        <Link to={"./"}>
                  <img
                              src={headerlogo}
                              alt="Login"
                              className="header-img"
                  
                            />
                </Link>
        </div>
       
       
        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn " id="login-btn">Login</button>
          </Link>
          <Link to={"/register"}> 
            <button className="btn bg-white text-decoration-none " id="register-btn">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
