import { use, useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/images/table.webp";

function Register() {
  const [fullName, setfullname] = useState("");
  const [email, setUEmail] = useState("");
  const [number, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fullname :", fullName);
    console.log("email :", email);
    console.log("number :", number);
    console.log("password :", password);
  };
  return (
    <>


      <div className=" position-relative d-flex justify-content-end">

         <img
                    src={registerImage}
                    alt="register"
                    className="table-img"
        
                  />

        <div className="position-absolute  card border p-3  mt-5 bg-light shadow rounded px-5 mx-5">
          <h1 className="text-center heading fw-bold">Create Account</h1>
          <p class="text-center text-muted small mb-3">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <br />

          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="fw-semibold small">Register as:</label>
              <div class="d-flex gap-3 mt-1">
                <div>
                  <input type="radio" name="role" /> Customer
                </div>
                <div>
                  <input type="radio" name="role" /> Restaurant
                </div>
                <div>
                  <input type="radio" name="role" /> Rider
                </div>
              </div>
            </div>

            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setfullname(e.target.value)}
            />
            <br />

            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="number"
              name="number"
              className="form-control"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <br />

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Confirm your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <div class="mb-3 small">
              <input type="checkbox" className="checkbox" /> I agree to the
              <span class="text-main"> terms and conditions</span>
            </div>

            <div className="text-center">
              <button type="submit" className="btn w-100" id="register" >
                Register
              </button>
            </div>
          </form>
          <hr />
          <p>
            Already have an account? <Link to="/login" className="account">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
