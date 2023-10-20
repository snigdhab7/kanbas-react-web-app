import { Link, useParams, useLocation } from "react-router-dom";
import "../../lib/bootstrap/bootstrap.css"
import "../../lib/font-awesome/css/font-awesome.css"
import "../../styles.css"
import "./index.css"

function CourseNavigation() {
    const links = [
        {name:"Home", url:"/Kanbas/Courses/Home/screen.html" },
        {name:"Modules", url:"/Kanbas/Courses/Modules/screen.html" },
        {name:"Piazza", url:"#" },
        {name:"Zoom Meetings", url:"#" },
        {name:"Assignments", url:"/Kanbas/Courses/Assignments/screen.html" },
        {name:"Quizzes", url:"#" },
        {name:"Grades", url:"/Kanbas/Courses/Grades/screen.html" },
        {name:"People", url:"#" },
        {name:"Panopto Video", url:"#" },
        {name:"Credentials", url:"#" },
        {name:"Progress Report", url:"#" }
        
    ];
//const links = ["Home", "Modules", "Assignments", "Grades"]
const { courseId } = useParams();
const { pathname } = useLocation();
return (
<div className="wd-course-navigation d-none d-md-block">
    <ul style={{ paddingLeft: '0px' }}>
{links.map((link, index) => (
<Link
key={index}
to={`/Kanbas/Courses/${courseId}/${link.name}`}
>
<li className={` ${pathname.includes(link.name) ? "wd-active" : ""}`}>
{link.name}
</li>
</Link>
))}
</ul>
</div>
);
}
export default CourseNavigation;