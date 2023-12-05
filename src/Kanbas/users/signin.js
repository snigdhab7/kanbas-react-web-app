import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
   const signin = async () => {
    try {
      const response = await client.signin(credentials);
  
      if (!response) {
        setError("No data available for the provided credentials.");
      } else {
        
        const userId = String(response._id);
  navigate(`/Kanbas/account?id=${userId}`)
  //navigate(`/Kanbas/account`)
      
      }
    } catch (error) {
      setError("Unable to sign in with the provided credentials. Please try again.");
    }
  }; 
  return (
<div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', margin:'30px',border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
  <h1 style={{ color: '#333' }}>Sign In</h1>
  {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

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
  <button onClick={signin} style={{ backgroundColor: '#00bcd4', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
    Sign In
  </button>
</div>

  );
}
export default Signin;

