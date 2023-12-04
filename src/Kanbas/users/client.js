import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
//export const USERS_API = `http://localhost:4000/api/users`;
const request = axios.create({
    withCredentials: true,
  });
  
export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const account = async () => {
    console.log("account")
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
  };
  export const updateUser = async (user) => {
    console.log("ID",user._id)
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  
  export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
  };

  export const createUser = async (user) => {
    const newUser = { ...user,
        _id: new Date().getTime().toString() };
    const response = await request.post(`${USERS_API}`, newUser);
    return response.data;
  };
  
  export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
  };
  export const deleteUser = async (user) => {
    const response = await request.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    console.log("Signup",credentials)
    const newUser = { ...credentials,
        _id: new Date().getTime().toString() };
    const response = await request.post(
      `${USERS_API}/signup`, newUser);
      
    return response.data;
  };
  export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  };
  