import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cv", file);
    formData.append("candidateId", 1); // Replace with dynamic user ID

    try {
      const res = await axios.post("http://localhost:5000/upload-cv", formData);
      alert(res.data);
    } catch (err) {
      alert("CV upload failed");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload CV</button>
      </form>
    </div>
  );
}

export default Dashboard;
