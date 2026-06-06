import { use, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setfullname] = useState("");
  const [email, setUEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Create Account!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter your full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={fullName}
              onChange={(e) => setfullname(e.target.value)}
            />
            <br />
            <label htmlFor="email">Enter your email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <hr />
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
