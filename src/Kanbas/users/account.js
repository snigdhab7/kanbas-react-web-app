import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate , useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import { useLocation } from 'react-router-dom';

//const [userId,setUserId] = useState("");
function Account() {
   // const { id } = useParams();
   const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  console.log("test")
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    console.log("ID",id)
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    try {
      console.log("ACC", account);
      await client.updateUser(account);

      // Assuming updateUser is successful, set the success message
      setSuccessMessage('Saved successfully!');
    } catch (error) {
      console.error('Error saving:', error);
      // Handle the error if needed
    }
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  
  }, []);
  return (
    <div style={{marginLeft:'30px'}}>
      <h1 style={{marginLeft:'30px'}}>Account</h1>
      {!account &&(
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: '1px solid #ccc', padding: '10px' }}>
      <Link to="/Kanbas/signup" style={{  backgroundColor: '#ffcc00', color: '#333', padding: '10px', textAlign: 'center', margin:'10px',textDecoration: 'none', borderRadius: '5px' }}>
        <span>Sign Up</span>
      </Link>
      <Link to="/Kanbas/signin" style={{  backgroundColor: '#00bcd4', color: '#fff', padding: '10px', textAlign: 'center', margin:'10px', textDecoration: 'none', borderRadius: '5px' }}>
        <span>Sign In</span>
      </Link>
    </div>
    
      
      )}
      {account && (
        <div className="form-container" style={{ marginLeft:'20px' }}>
          {successMessage && <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>}
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={account.password}
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
        />
      <br/><br/>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={account.firstName}
          onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
        />
      <br/><br/>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={account.lastName}
          onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
        />
      <br/><br/>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={account.dob}
          onChange={(e) => setAccount({ ...account, dob: e.target.value })}
        />
      <br/><br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={account.email}
          onChange={(e) => setAccount({ ...account, email: e.target.value })}
        /><br/><br/>
      
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          onChange={(e) => setAccount({ ...account, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <br/><br/>
        <div style={{ display: 'flex', gap: '10px' }}>
  <button onClick={save} style={{ marginRight: '10px' }} className="btn btn-primary">
    Save
  </button>
  <button onClick={signout} className="btn btn-danger">
    Signout
  </button>
</div>

<Link to="/Kanbas/admin/users" style={{ display: 'block', width: '100%', marginTop: '10px' }} className="btn btn-warning">
  Users
</Link>
      </div>
      
      )}
    </div>
  );
}
export default Account;


