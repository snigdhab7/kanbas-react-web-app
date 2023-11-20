import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import "../../lib/bootstrap/bootstrap.css"
import "../../lib/font-awesome/css/font-awesome.css"
import "../../styles.css"
import { React, useState } from "react"

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
 
return (
<div class="wd-flex-grow-1">
<div class="dashboard">
    <h3>Dashboard</h3>
    <hr/>
    <h5>Course</h5>
    <div>
  <input
    value={course.title}
    className="form-control mb-3"
    onChange={(e) => setCourse({ ...course, title: e.target.value })}
    placeholder="Title"
  />

  <input
    value={course.number}
    className="form-control mb-3"
    onChange={(e) => setCourse({ ...course, number: e.target.value })}
    placeholder="Number"
  />

  <input
    value={course.startDate}
    className="form-control mb-3"
    type="date"
    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
    placeholder="Start Date"
  />

  <input
    value={course.endDate}
    className="form-control mb-3"
    type="date"
    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
    placeholder="End Date"
  />

  <button className="btn btn-primary me-2" onClick={addNewCourse}>
    Add
  </button>

  <button className="btn btn-primary" onClick={() => updateCourse(course)}>
    Update
  </button>
</div>

    <h4>Published Courses (24)</h4>
    <hr/>
    
    <div class="d-flex flex-row flex-wrap">
    <ul  style={{ listStyle: 'none'}}>
  {courses.map((link) => (
    <Link key={link._id}
    to={`/Kanbas/Courses/${link._id}`}>

    <li key={link.id} style={{ display: 'inline-block' , marginRight: '20px'}}>
      <div className="col-md-3 mb-4">
        <a href={link.url}>
          <div className="card" style={{ width: '250px' }}>
            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{link.title}</h5>
              <p className="card-text">
                {link.cardText}
                <br />202410_2 Fall 2023 Se...
              </p>
              <a href={link.url} className="btn btn-link">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </a>
            </div>
            <button className="btn btn-warning me-2"
onClick={(event) => {
  console.log("edit")
event.preventDefault();
setCourse(link);
}}>
Edit
</button>

  <button className="btn btn-danger"
onClick={(event) => {
event.preventDefault();
deleteCourse(link);
}}>
Delete
</button>
          </div>
        </a>
      </div>
    </li>
    </Link>
  ))}
</ul>
</div>

</div></div>
);
}
export default Dashboard;