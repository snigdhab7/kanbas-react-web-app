import KanbasNavigation from "../KanbasNavigation/index.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/index.js";
import Courses from "./Courses/index.js";
import Account from "./Account/index.js";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = "https://kanbas-node-server-app-lhw3.onrender.com/api/courses";
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
<Route path="Account" element={<Account/>} />
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