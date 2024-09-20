import {Link ,Outlet} from "react-router-dom";
import "./nav.css";
//import MobileNav from './mobileNav.jsx';
const Navlink=()=> {
  return ( <>
  <header>
  <nav>
  <ul className="flex">
 <li className="link"><Link to="/  /news-protfolio">Home</Link></li> 
 <li className="link"><Link to="  /news-protfolio/education">Education</Link></li> 
  <li className="link"><Link to="  /news-protfolio/sport">Sport</Link></li> 
 <li className="link"><Link to="  /news-protfolio/nu/notice">Nu/notice</Link></li> 
<li className="link"><Link to="  /news-protfolio/top">TopNews</Link></li> 
 <li className="link"><Link to="  /news-protfolio/international">International</Link></li> 
  </ul>
</nav>
<Outlet />
</header>
</>)
}
export default Navlink;