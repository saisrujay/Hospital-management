import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [uhid, setUhid] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login" , { name, uhid })
      const user = response.data;
      setUserDetails(user);
      console.log("User details:", user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UHID"
          value={uhid}
          onChange={(e) => setUhid(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button>
        <Link to="/">Home</Link>
      </button>

      {userDetails && (
        <div>
          <h2>User Details:</h2>
          <p>Name: {userDetails.name}</p>
          <p>Age: {userDetails.age}</p>
          <p>Gender: {userDetails.gender}</p>
          <p>UHID: {userDetails.uhid}</p>
          <p>OPID: {userDetails.opid}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
