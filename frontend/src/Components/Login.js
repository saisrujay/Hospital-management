import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [uhid, setUhid] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        name,
        uhid,
      });
      const user = response.data;
      navigate('/details', { state: { user } });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>LOGIN</h2>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <label htmlFor="user-email" style={{ paddingTop: '13px' }}>
            &nbsp;Name
          </label>
          <input
            type="text"
            id="user-email"
            className="form-content"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="form-border"></div>
          <label htmlFor="user-password" style={{ paddingTop: '22px' }}>
            &nbsp;UHID
          </label>
          <input
            type="text"
            id="user-password"
            className="form-content"
            value={uhid}
            onChange={(e) => setUhid(e.target.value)}
          />
          <div className="form-border"></div>
          <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        </form>
        <div className="buttons-container">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
