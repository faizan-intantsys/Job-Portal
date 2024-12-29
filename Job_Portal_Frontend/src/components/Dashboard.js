import React, { useState } from "react";
import axios from "axios";
import Header from "../Home Components/Header";

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("cv", formData.file);
    uploadData.append("candidateId", 1); // Replace with dynamic user ID
    uploadData.append("name", formData.name);
    uploadData.append("email", formData.email);
    uploadData.append("number", formData.number);

    try {
      const res = await axios.post("http://localhost:5000/upload-cv", uploadData);
      alert(res.data);
    } catch (err) {
      alert("CV upload failed");
    }
  };

  return (
    <div>
      <Header />
      <h2>Dashboard</h2>
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
        <input
          type="file"
          name="file"
          onChange={handleChange}
          required
        />
        <button type="submit">Upload CV</button>
      </form>
    </div>
  );
}

export default Dashboard;
