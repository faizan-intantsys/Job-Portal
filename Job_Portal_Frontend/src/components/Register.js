import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Home Components/Header";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger form entry animation
    setAnimation(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (formData.password !== formData.confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    try {
      const res = await axios.post("http://localhost:5000/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <>
      <Header />
      <div className={`register-container ${animation ? "fade-in" : ""}`}>
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create an Account</h2>
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
          <Link to="/login" className='abc'>Already a user ?</Link>
        </form>
      </div>
    </>
  );
}

export default Register;
