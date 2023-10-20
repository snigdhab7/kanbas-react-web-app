import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";
function Grades(){
return(`<div class="d-block d-md-none">
<div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" onclick = "window.location.href='/Kanbas/Courses/CourseNavigation';">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</div>
<div class="wd-flex-row-container">
${KanbasNavigation("Courses")}
${CourseNavigation("Grades")}
<div class="wd-flex-grow-1">
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" style="text-decoration:none;"><h5><span style="color:red;">CS 5610.11550.202410</span></h5></a></li>
        <li class="breadcrumb-item active" aria-current="page">Grades</li>
    </ol>
</nav>
<hr/>
<div class="mb-3 d-flex justify-content-end" style="margin-right:20px;">
    <button class="btn btn-secondary me-2"><i class="fa fa-download" aria-hidden="true"></i> Import</button>
    <button class="btn btn-secondary me-2"><i class="fa fa-download" aria-hidden="true"></i> Export <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
    <button class="btn btn-secondary"><i class="fa fa-cog" aria-hidden="true"></i></button>
</div>
<div class="row mb-3">
    <div class="col-sm-4">
    <label class="form-label">Student Names</label>

        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" title="Type the name of the student to search for" placeholder="Search Students">
        </div>
            </div>

<div class="col-sm-4">
    <label class="form-label">Assignment Names</label>
    <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" title="Type the name of the assignments to search for" placeholder="Search Assignments">
    </div>      </div>
    </div>

    <button class="btn btn-secondary">
        <i class="fa fa-filter"></i> Apply Filter
    </button>
<br/><br/>
<div class="table-responsive">
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr style="background-color: lightgray">
                <th>Student Name</th>
                <th>A1 SETUP<br />Out of 100</th>
                <th>A2 HTML<br />Out of 100</th>
                <th>A3 CSS<br />Out of 100</th>
                <th>A4 BOOTSTRAP<br />Out of 100</th>
                <th>A5 JAVASCRIPT<br />Out of 100</th>
                <th>A6 REACT<br />Out of 100</th>
                <th>A7 REDUX<br />Out of 100</th>
                <th>A8 NODE<br />Out of 100</th>
                <th>A9 MONGO<br />Out of 100</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style="color:red;">Alice</td>
                <td>100%</td>
                <td>93%</td>
                <td>90%</td>
                <td>100%</td>
                <td><input value="100" size="3" />  </td>
                <td>88%</td>
                <td>100%</td>
                <td>85%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td style="color:red;">Bob</td>
                <td>99%</td>
                <td>94%</td>
                <td><input value="95" size="3" /> </td>
                <td>90%</td>
                <td>87%</td>
                <td>79%</td>
                <td>100%</td>
                <td>100%</td>
                <td>93%</td>
            </tr>
            <tr>
                <td style="color:red;">Charlie</td>
                <td>87%</td>
                <td>88%</td>
                <td>85%</td>
                <td>73%</td>
                <td>91%</td>
                <td>86%</td>
                <td>84%</td>
                <td><input value="76" size="3" /> </td>
                <td>90%</td>
            </tr>
            <tr>
                <td style="color:red;">Macy</td>
                <td ><input value="91" size="3" />  </td>
                <td>84%</td>
                <td>92%</td>
                <td>90%</td>
                <td>89%</td>
                <td>95%</td>
                <td>92%</td>
                <td>87%</td>
                <td>89%</td>
            </tr>
            </tbody>
        </table>
    </div>

</div>

</div>
</div>
`);
}
export default Grades;