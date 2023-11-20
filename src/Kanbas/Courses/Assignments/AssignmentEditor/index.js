import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
 import db from "../../../Database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../client";
import { useLocation } from "react-router-dom";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    setAssignments
    } from "../assignmentsReducer";
 import { findAssignmentsForCourse } from "../client";
function AssignmentEditor() {
    console.log("PARAMSSS", useParams())
    console.log("111",window.location.search);
    const location = useLocation();
const fromAddButton = new URLSearchParams(location.search).get("fromAddButton");
console.log("111",fromAddButton);
const  assignmentId  = useParams().assignmentId;

console.log("FROMM",useParams())
const assignments = useSelector((state) => state.assignmentsReducer.assignments);

const [assignment, setAssignment] = useState(assignments.find((assignment) => assignment._id === assignmentId));
const { courseId } = useParams();
const navigate = useNavigate();
const handleTitleChange = (e) => {
    setAssignment({ ...assignment, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setAssignment({ ...assignment, description: e.target.value });
  };
  const handleDueDateChange= (e) => {
    setAssignment({ ...assignment, dueDate: e.target.value });
  };
  const handleAvailableFromDateChange= (e) => {
    setAssignment({ ...assignment, availableFromDate: e.target.value });
  };
  const handleAvailableUntilDateChange= (e) => {
    setAssignment({ ...assignment, availableUntilDate: e.target.value });
  };
  const handleCancel = () => {
    console.log("fromAddButton",fromAddButton)
    if (fromAddButton == "true") {
       console.log("DELLL",assignmentId)
      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
      
    } 
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    
  };
const handleUpdateAssignment = async () => {

        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      };
      
useEffect(() => {
    if (assignmentId) {
        findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
        
    );
      } else {
        // Handle the case of a new assignment
        setAssignment({ title: "", description: "" }); // Set initial values for a new assignment
      }
      
  }, [courseId]);
  const dispatch = useDispatch();

return (
<div>
<br/><br/>
<div className="container">
            <div className="float-end text-end">
                <i className="fa fa-check-circle text-success" style={{margin:'3px'}} aria-hidden="true"></i> Published
                <i className="fa fa-ellipsis-v" aria-hidden="true" style={{color: 'black',margin:'5px'}}></i>
            </div>

            <form>
            <div>
  <label htmlFor="assignmentTitle" className="form-label">
    Assignment Name
  </label>
  <input
    type="text"
    id="assignmentTitle"
    value={assignment.title}
    onChange={handleTitleChange}
    className="form-control mb-3"
    placeholder="Enter Assignment Name"
  />

  <label htmlFor="assignmentDescription" className="form-label">
    Assignment Description
  </label>
  <textarea
    id="assignmentDescription"
    value={assignment.description}
    onChange={handleDescriptionChange}
    className="form-control mb-3"
    placeholder="Enter Assignment Description"
  />
</div>


                
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                    <label for="points" className="form-label">Points</label>
                    </div>
                    <div className="col-sm-2">
                    <input id="points" value="100" type="number" max="100" min="50" step="5" className="form-control"></input>
                </div>
        </div>
        <div className="row mb-3">
            <div className="col-sm-2"style={{textAlign: 'right'}}>
                    <label for="assignmentGroup" className="form-label">Assignment Group</label>
            </div>
            <div className="col-sm-2">
                <select id="assignmentGroup" className="form-select">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>PROJECT</option>
                    </select>
                </div></div>

                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                    <label for="displayGrade" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-sm-2">
                        <select id="displayGrade" className="form-select">
                        <option>Percentage</option>
                        <option>Marks</option>
                        <option>Grade</option>
                    </select>
                    </div></div>

                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                    <label for="submissionType" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-sm-2">
                        <select id="submissionType" className="form-select">
                        <option>Online</option>
                        <option>In-Person</option>
                    </select>
                    </div></div>

                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                    <label className="form-label">Online Entry Options</label>
                    </div>
                    <div className="col-sm-2">
                    <div className="form-check">
                        <input type="checkbox" id="textEntry" className="form-check-input"></input>
                        <label for="textEntry" className="form-check-label">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" checked className="form-check-input"></input>
                        <label className="form-check-label">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input"></input>
                        <label className="form-check-label">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input"></input>
                        <label className="form-check-label">Student Annotations</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input"></input>
                        <label className="form-check-label">File Uploads</label>
                    </div>
                    </div></div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="submissionAttempts" className="form-label text-end">Submission Attempts</label>
                    </div>
                    <div className="col-sm-2">
                <select id="submissionAttempts" className="form-select">
                    <option>Unlimited</option>
                    <option>One-Time</option>
                </select></div>
                <br/>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                    <label for="plagiarismReview" className="form-label text-end">Plagiarism Review</label>
                </div>
                <div className="col-sm-3">
                    <select id="plagiarismReview" className="form-select">
                        <option>None</option>
                        <option>Required</option>
                    </select>
                    <br /></div></div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label className="form-label text-end">Group Assignment</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="checkbox" id="groupAssignment" className="form-check-input" />This is a group assignment
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                        <label className="form-label text-end">Peer Review</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="checkbox" id="peerReview" className="form-check-input" />Require Peer Review
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label className="form-label">Assign To</label>
                    </div><div className="col-sm-2">
                <input id="assignTo" type="text" className="form-control" value="Everyone" placeholder="Assign To" />
                    <br /></div></div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="dueDate" className="form-label text-end">Due</label>
                    </div>
                    <div className="col-sm-2">
                <input type="date" id="dueDate" className="form-control" value={assignment.dueDate} min="2020-01-09" max="2023-12-09" onChange={handleDueDateChange}/>
                <br /></div></div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="availableFrom" className="form-label text-end">Available from</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="date" id="availableFrom" className="form-control" value={assignment.availableFromDate} onChange={handleAvailableFromDateChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="untilDate" className="form-label text-end">Until</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="date" id="untilDate" className="form-control" value={assignment.availableUntilDate} onChange={handleAvailableUntilDateChange}></input>
                    </div>
                </div>
                               <div className="row mb-3">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-5">
                <button className="btn btn-light btn-outline-secondary" style={{width:'80%'}}>+Add</button>
                    </div></div>
<br/>

                <input type="checkbox" className="form-check-input" />Notify users that this content has changed
<br/><br/>
            </form>

        </div>
        <button onClick={handleCancel} className="btn btn-danger">
  Cancel
</button>
<button style={{margin:'10px'}}  onClick={handleUpdateAssignment} className="btn btn-success me-2">
Save
</button>
</div>
);
}
export default AssignmentEditor;