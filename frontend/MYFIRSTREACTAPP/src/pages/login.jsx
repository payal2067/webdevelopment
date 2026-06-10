import { use, useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/images/table.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email :", email);
    console.log("password :", password);
  };
  return (
    <>
      <div className="position-relative   d-flex">
         
          <img
            src={loginImage}
            alt="Login"
            className="table-img"

          />
       
        <div className=" position-absolute  card border p-3 mt-5 bg-light shadow mx-5 px-5 rounded">
          <h1 className="text-center heading fw-bold">Welcome Back</h1>
          <p className="text-center fs-6">Login to your Cravings account</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <div class="d-flex justify-content-between align-items-center mb-3 gap-5">
              <label>
                <input className="checkbox small px-4" type="checkbox"/>
                Remember me
              </label>

              <Link to="/login" className="account">Forgot Password?</Link>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn w-100 border-0 px-4 py-2" id="login"
              >
                Login
              </button>
            </div>
          </form>
          <hr />

          <p className="text-center">Don't have an account?</p>
          <p className="text-center ">

            <Link to="/register" className="account">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
