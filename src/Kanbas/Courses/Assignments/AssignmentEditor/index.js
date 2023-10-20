import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
function AssignmentEditor() {
const { assignmentId } = useParams();
const assignment = db.assignments.find(
(assignment) => assignment._id === assignmentId);
const { courseId } = useParams();
const navigate = useNavigate();
const handleSave = () => {
console.log("Actually saving assignment TBD in later assignments");
navigate(`/Kanbas/Courses/${courseId}/Assignments`);
};
return (
<div>
<br/><br/>
<div className="container">
            <div className="float-end text-end">
                <i className="fa fa-check-circle text-success" style={{margin:'3px'}} aria-hidden="true"></i> Published
                <i className="fa fa-ellipsis-v" aria-hidden="true" style={{color: 'black',margin:'5px'}}></i>
            </div>

            <form>
                <div className="mb-3">
                    <label className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" title="Type the name of the assignment to search for" value={assignment.title}></input>
                </div>

                <div className="mb-3">
                    <div className="container bg-white border rounded p-3">
                        <p>This Assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.</p>
                    </div>
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
                <input type="date" id="dueDate" className="form-control" value="2021-01-01" min="2020-01-09" max="2023-12-09" />
                <br /></div></div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="availableFrom" className="form-label text-end">Available from</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="date" id="availableFrom" className="form-control" value="2021-01-01"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-2" style={{textAlign: 'right'}}>
                <label for="untilDate" className="form-label text-end">Until</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="date" id="untilDate" className="form-control" value="2021-01-01"></input>
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

<Link to={`/Kanbas/Courses/${courseId}/Assignments`}
className="btn btn-danger">
Cancel
</Link>
<button style={{margin:'10px'}}  onClick={handleSave} className="btn btn-success me-2">
Save
</button>
</div>
);
}
export default AssignmentEditor;