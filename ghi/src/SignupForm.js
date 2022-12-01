import React, { useState } from "react";

function SignupForm() {
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
        const data = {
            email: email,
            password: password,
        };
        const json = JSON.stringify(data);
        console.log(json);

        const customerURL = `${process.env.REACT_APP_ACCOUNTS}/gathering/accounts`;

        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(customerURL, fetchConfig);
        console.log(response);
        if (response.ok) {
            e.target.reset();
            clearState();
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className="text-center">Create account</h1>
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
                <label htmlFor="password">Re-enter Password</label>
              </div>
              <div className="col text-center">
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
            {submitted && (
              <div
                className="alert alert-success mb-0 p-4 mt-4"
                id="success-message"
              >
                Your appointment has been created!
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
export default SignupForm
