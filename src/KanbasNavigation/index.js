import { Link, useLocation } from "react-router-dom";
import "../lib/bootstrap/bootstrap.css"
import "../lib/font-awesome/css/font-awesome.css"
import "../styles.css"
import "./index.css"
function KanbasNavigation() {
        const links = [
        {name:"Account", icon:"fa fa-user-circle-o" },
        {name:"Dashboard",icon:"fa fa-tachometer" },
        {name:"Courses", icon:"fa fa-book" },
        {name:"Calendar",  icon:"fa fa-calendar" },
        {name:"Inbox", icon:"fa fa-inbox" },
        {name:"History", icon:"fa fa-clock-o" },
        {name:"Studio",  icon:"fa fa-desktop" },
        {name:"Commons", icon:"fa fa-arrow-circle-o-right" },
        {name:"Help",  icon:"fa fa-question-circle" }
        
    ];
//const links = ["Account", "Dashboard", "Courses", "Calendar"];
const { pathname } = useLocation();
return (
    <div class="wd-bg-color-black d-none d-md-block">
<ul class="wd-kanbas-navigation">

<li>
    <img src="https://d3ogvqw9m2inp7.cloudfront.net/assets/dynamic/assets/recruiters/images/1800897/logo.jpg" className="neulogo" alt="Logo" />
</li>

    


    {links.map((link,index) => (
        <Link
        key={index}
        to={`/Kanbas/${link.name}`}
        >
        


        <li style={{ display: 'inline-block' , marginRight: '20px'}} className={` ${pathname.includes(link.name) ? "wd-active" : ""}`}><a href={`/Kanbas/${link}`}>
        <i className={link.icon} aria-hidden="true"></i>
              {link.name}
              </a></li>
   
    
    </Link>
  ))}
        
    
          
    </ul>
</div>


);
}
export default KanbasNavigation;
