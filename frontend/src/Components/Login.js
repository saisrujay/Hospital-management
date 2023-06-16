import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [uhid, setUhid] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send login request to backend API
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uhid }),
    });

    if (response.ok) {
      const user = await response.json();
      // Handle successful login, e.g., set user in state or redirect to another page
      console.log("User details:", user);
    } else {
      // Handle login failure, e.g., display error message
      console.error("Login failed");
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
    </div>
  );
}

export default Login;
