import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
        console.log("error",err)
      setError(err.response.data.message);
    }
  };
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', margin:'30px',padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
  <h1 style={{ color: '#333' }}>Signup</h1>
  {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
  <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Username:</label>
  <input
    type="text"
    id="username"
    value={credentials.username}
    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
    style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box', borderRadius: '3px', border: '1px solid #ccc' }}
  />
  <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
  <input
    type="password"
    id="password"
    value={credentials.password}
    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
    style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box', borderRadius: '3px', border: '1px solid #ccc' }}
  />
  <button onClick={signup} style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
    Signup
  </button>
</div>

  );
}
export default Signup;

