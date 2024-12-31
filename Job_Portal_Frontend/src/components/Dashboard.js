import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from "../Home Components/Header2";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
  });
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Extract user ID from token on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
      setUserId(decodedToken.id);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!formData.file || !formData.name || !formData.email || !formData.number) {
      setMessage("All fields are required.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("cv", formData.file);
    uploadData.append("candidateId", userId); // Use dynamic user ID
    uploadData.append("name", formData.name);
    uploadData.append("email", formData.email);
    uploadData.append("number", formData.number);

    try {
      const res = await axios.post("http://localhost:5000/upload-cv", uploadData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add token for authentication
        },
      });
      setMessage(res.data.message || "CV uploaded successfully.");
      setFormData({ name: "", email: "", number: "", file: null }); // Reset form
    } catch (err) {
      console.error(err);
      setMessage("CV upload failed. Please try again.");
    }
  };


  return (
    <div>
      <Header2 />
      <h2>Dashboard</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleUpload}>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Upload CV</button>
      </form>
    </div>
  );
}

export default Dashboard;
