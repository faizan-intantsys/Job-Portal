import React, { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "../Home Components/Header2";
import "./AdminDashboard.css"; // Import the CSS file for styling

function AdminDashboard() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/candidates");
        console.log('Candidates response:', res.data); // Log the response to inspect it
        setCandidates(res.data.results); // Set the state to the response
      } catch (err) {
        console.error("Failed to fetch candidates:", err);
        alert("Failed to fetch candidates");
      }
    };
  
    fetchCandidates();
  }, []);;

  return (
    <div className="dashboard-container">
      <Header2 />
      <div className="dashboard-content">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <table className="candidates-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>CV Path</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(candidates) && candidates.length > 0 ? (
    candidates.map((candidate) => (
      <tr key={candidate.id}>
        <td>{candidate.id}</td>
        <td>{candidate.name}</td>
        <td>{candidate.email}</td>
        <td>
          <a
            href={`http://localhost:5000/${candidate.cv_path}`}
            target="_blank"
            rel="noreferrer"
            className="cv-link"
          >
            Download CV
          </a>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No candidates found</td>
    </tr>
  )}
</tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
