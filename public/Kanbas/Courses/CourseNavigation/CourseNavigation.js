function CourseNavigation(active){
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
        {name:"Discussions", url:"#" },
        {name:"Announcements", url:"#" },
        {name:"Pages", url:"#" },
        {name:"Files", url:"#" },
        {name:"Rubrics", url:"#" },
        {name:"Outcomes", url:"#" },
        {name:"Collaborations", url:"#" },
        {name:"Quizzes", url:"#" },
        {name:"Syllabus", url:"/Kanbas/Settings/screen.html" },
        
    ];
    return(`<div>
    <ul class="wd-course-navigation d-none d-md-block">
    ${links.map((link) => 
        `<li class="${link.name === active ? "wd-active" : ""}"><a href="${link.url}">${link.name}</a></li>`
    ).join("")}

    </ul>
</div>`);
}
export default CourseNavigation;