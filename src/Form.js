import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValidated, setEmailValidated] = useState(false);
  const [passValidate, setpassValidate] = useState(false);
  const [confimPassValidate, setconfimPassValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passValidate && confimPassValidate) {
      alert("Form Submitted Successfully");
      e.target.reset();
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setEmailValidated(false);
      setpassValidate(false);
      setconfimPassValidate(false);
    } else {
      alert("Can't Submit The Form");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    setEmailValidated(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setpassValidate(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    setconfimPassValidate(value === password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        style={{
          border: emailValidated ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: emailValidated ? "20px" : "0px",
        }}
        type="text"
        onChange={(e) => validateEmail(e.target.value)}
        name="email"
        value={email}
      />
      {!emailValidated && (
        <p>Email is required and must be in a valid format</p>
      )}

      <label htmlFor="password">Password:</label>
      <input
        style={{
          border: passValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: passValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => validatePassword(e.target.value)}
        name="password"
        value={password}
      />
      {!passValidate && <p>Password must be at least 8 characters long</p>}

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        style={{
          border: confimPassValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: confimPassValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => validateConfirmPassword(e.target.value)}
        name="confirmPassword"
        value={confirmPassword}
      />
      {!confimPassValidate && <p>Passwords do not match</p>}

      <button className="btn" type="submit">
        SignUp
      </button>
    </form>
  );
};

export default Form;