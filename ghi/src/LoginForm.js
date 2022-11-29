import React, { useState, useEffect } from "react";

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input
        value={value}
        onChange={onChange}
        required
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

function AccountForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const json = JSON.stringify(data);
    const customerURL = "http://localhost:8001/docs/";
    const fetchConfig = {
      method: "post",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(customerURL, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();
      setEmail("");
      setPassword("");
    }
  }

  return (
    <form>
      <BootstrapInput
        id="email"
        placeholder="name@example.com"
        labelText="your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <BootstrapInput
        id="password"
        placeholder="password"
        labelText="your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <button
        value={handleSubmit}
        onChange={(e) => handleSubmit(e.target.value)}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default AccountForm;
