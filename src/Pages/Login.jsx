import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from 'react-router-dom';

function Login() {
  // State for storing email and password inputs

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for storing error message if login fails
  const [error, setError] = useState("");

  // user login credentials
  const userLogin = {
    email: "teacher@example.com",
    password: "12345"
  };
  // useNavigate hook to redirect on successful login

  const navigate = useNavigate()
  // Function to handle login form submission

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Check if entered email and password match  with user credentials

    if (email === userLogin.email && password === userLogin.password) {
      alert("Login Successful!");
      setError("");
      navigate("/students")
    } else { // If login failed show error message
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow" >

            <h3 className="text-center mb-3">Teacher Login</h3>
            {/* Show error message if login fails */}

            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              {/* Email input field */}

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {/* Password input field */}

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {/* Login button */}
              <Button text="Login" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
