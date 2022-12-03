import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [_token, _login, _logout, signup] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const clearState = () => {
    setEmail("");
    setPassword("");
    setSubmitted(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    signup(email, password);
    navigate("/");
    clearState();
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="text-left">Create account</h1>
          <div className="text-left">
            Already have an account?
            <NavLink to="/login"> Login</NavLink>
          </div>
          <form id="create-appointment-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                type="text"
                name="email"
                id="email"
                className="form-control"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col text-left">
              <button className="btn btn-primary">Create</button>
            </div>
          </form>
          {submitted && (
            <div
              className="alert alert-success mb-0 p-4 mt-4"
              id="success-message"
            >
              Your account has been created!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
