import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Home Components/Header";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation when the page loads
    setAnimation(true);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", credentials);
      alert(res.data.message);

      // Store authentication token
      // localStorage.setItem("authToken", res.data.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
      <Header />
      <div className={`login-container ${animation ? "fade-in" : ""}`}>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back</h2>
          <p>Please log in to access your dashboard.</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
