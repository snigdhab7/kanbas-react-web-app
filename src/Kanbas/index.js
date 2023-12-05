import KanbasNavigation from "../KanbasNavigation/index.js";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/index.js";
import Courses from "./Courses/index.js";
// import Account from "./Account/index.js";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin.js";
import Account from "./users/account.js";
import UserTable from "./users/table.js";
import Signup from "./users/signup.js";
import * as client from "./users/client.js";

function Kanbas() {
  const [userId,setUserId] = useState("");
  const navigate = useNavigate();
  const signin = async (credentials) => {
      try {
        const response = await client.signin(credentials);
        setUserId(response._id)
    
        if (!response) {
        //  setError("No data available for the provided credentials.");
        } else {
          
          const userId = String(response._id);
    navigate(`/Kanbas/account?id=${userId}`)
    //navigate(`/Kanbas/account`)
        
        }
      } catch (error) {
       // setError("Unable to sign in with the provided credentials. Please try again.");
      }
    };
    const [courses, setCourses] = useState([]);
    const URL="https://kanbas-node-server-app-q5sx.onrender.com/api/courses";
    //const URL = "https://kanbas-node-server-app-lhw3.onrender.com/api/courses";
    //const URL = "http://localhost:4000/api/courses"
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

const [course, setCourse] = useState({
  _id:476,
title: "New Course", number: "New Number",
startDate: "2023-09-10", endDate: "2023-12-15",
});
const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    console.log("COURSE oBJ", course);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          console.log("printing response data", response.data)
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

    return (
        <Provider store={store}>
    <div className="d-flex">
    <KanbasNavigation />
    <div>
  {/*   <h1>Account</h1>
    <h1>Dashboard</h1>
    <h1>Courses</h1> */}
    <Routes>
<Route path="/" element={<Navigate to="Dashboard" />} />
<Route path="/signin" element={<Signin  signin={signin}/>} /> 
<Route path="/signup" element={<Signup />} /> 
<Route path="/admin/users" element={<UserTable />} />
<Route path="/account" element={<Account />} />
<Route path="/account/:id" element={<Account />} />
{/* <Route path="Account" element={<Account/>} /> */}
<Route path="Dashboard" element={
    <Dashboard
courses={courses}
course={course}
setCourse={setCourse}
addNewCourse={addNewCourse}
deleteCourse={deleteCourse}
updateCourse={updateCourse}/>
} />
<Route path="Courses/:courseId/*" element={<Courses  courses={courses} />} />
</Routes>
    </div>
    </div>
    </Provider>
    );
    }
    export default Kanbas;

/* import {Link} from "react-router-dom";
import Nav from "../Nav_new";
import KanbasNavigation from "../KanbasNavigation/index.js";

function Kanbas() {
    return(
        <div className="container">
            <Nav/>
        <Link to="/hello">Hello</Link> |
        <Link to="/Labs/a3">A3</Link> |
        <Link to="/Kanbas">Kanbas</Link>
    <h1>Kanbas</h1>
    <KanbasNavigation />

    </div>
    );
    }
    export default Kanbas
     */