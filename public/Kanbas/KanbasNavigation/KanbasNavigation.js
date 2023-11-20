function KanbasNavigation(active) {
    const links = [
        {name:"Account", url:"/Kanbas/Account/Profile/screen.html", icon:"fa fa-user-circle-o" },
        {name:"Dashboard", url:"/Kanbas/Dashboard/screen.html", icon:"fa fa-tachometer" },
        {name:"Courses", url:"/Kanbas/Courses/Home/screen.html", icon:"fa fa-book" },
        {name:"Calendar", url:"#", icon:"fa fa-calendar" },
        {name:"Inbox", url:"#", icon:"fa fa-inbox" },
        {name:"History", url:"#", icon:"fa fa-clock-o" },
        {name:"Studio", url:"#", icon:"fa fa-desktop" },
        {name:"Commons", url:"#", icon:"fa fa-arrow-circle-o-right" },
        {name:"Help", url:"#", icon:"fa fa-question-circle" }
        
    ];
return(`<div class="wd-bg-color-black d-none d-md-block">
<ul class="wd-kanbas-navigation">

    <li>

            <img src="https://d3ogvqw9m2inp7.cloudfront.net/assets/dynamic/assets/recruiters/images/1800897/logo.jpg" alt="Northeastern University Logo" class="neulogo">

    </li>

    ${links.map((link) => 
        `<li class="${link.name === active ? "wd-active" : ""}"><a href="${link.url}">
        <i class="${link.icon}" aria-hidden="true"></i>${link.name}</a></li>`
    ).join("")}


  
</ul>
</div>`
);
}
export default KanbasNavigation;
