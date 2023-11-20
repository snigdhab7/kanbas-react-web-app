import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../lib/bootstrap/bootstrap.css"
import "../../lib/font-awesome/css/font-awesome.css"
import "../../styles.css"
function Account() {

return (
<>
<div class="wd-flex-row-container">
<div>
<ul class="wd-course-navigation d-none d-md-block">
    <li><a href="#">Notifications</a></li>
    <li class="wd-active"><a href="/Kanbas/Account/Profile/screen.html">Profile</a></li>
    <li><a href="#">Files</a></li>
    <li><a href="/Kanbas/Settings/screen.html">Settings</a></li>
    <li><a href="#">ePortfolios</a></li>
    <li><a href="#">Shared Content</a></li>
    <li><a href="#">The Hub</a></li>
    <li><a href="#">Qwickly Course Tools</a></li>
    <li><a href="#">Global Announcements</a></li>
</ul>
</div>
<div class="wd-flex-grow-1">
Snigdha Bose's Profile
<hr />
<form action="/Kanbas/Account/Profile/EditProfile/screen.html">
    <button style={{position: 'absolute',right:'100px'}}><i class="fa fa-pencil" aria-hidden="true"></i> Edit Profile</button>
</form>
<i class="fa fa-user-circle-o" aria-hidden="true" style={{fontSize: '5em',marginLeft: '30px', marginBottom: '10px'}}></i>
<br/>
<h1 style={{display:'inline'}}>Snigdha Bose</h1>
<br/><br/>
<h3>Contact</h3>
No Registerd Services, you can add some on the <a href="/Kanbas/Settings/screen.html">settings</a> page.

<br/><br/>
<h3>Biography</h3>
Student, Software Engineer, AI and NLP enthusiast.
<br/><br/>
<h3>Links</h3>
<i class="fa fa-link" aria-hidden="true"></i><a href="#">YouTube <i class="fa fa-share-square-o" aria-hidden="true"></i></a>
</div></div></>


);
}
export default Account;