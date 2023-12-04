import db from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams, useLocation } from "react-router-dom";
import CourseNavigation from "../../Kanbas/CourseNavigation/index.js";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
const { courseId } = useParams();
const page = (useParams())['*'];
const URL="https://kanbas-node-server-app-q5sx.onrender.com/api/courses";
//const URL = "https://kanbas-node-server-app-lhw3.onrender.com/api/courses";
//const URL = "http://localhost:4000/api/courses"
const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('navbar-breadcrum');
    if (element) {
      element.style.setProperty('--bs-breadcrumb-divider', '>');
    }
  });
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

return (
<div>
<nav id="navbar-breadcrum" aria-label="breadcrumb"style={{marginLeft: '5px'}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" style={{textDecoration: 'none'}}><span style={{color : 'red'}}>CS 5610.11550.202410</span></a></li>
                <li className="breadcrumb-item active" aria-current="page">{page}</li>
            </ol>
        </nav>
<CourseNavigation />
<div>
<div
className="overflow-y-scroll position-fixed bottom-0 end-0"
style={{
left: "250px",
top: "30px",
}}
>
<Routes>
<Route path="/" element={<Navigate to="Home" />} />
<Route path="Home" element={<Home/>} />
<Route path="Modules" element={<Modules/>} />
<Route path="Assignments" element={<Assignments/>} />
<Route path="Assignments/:assignmentId"
element={<AssignmentEditor/>}/>

<Route path="Grades" element={<Grades />} />
</Routes>
</div>
</div>

</div>
);
}
export default Courses;
