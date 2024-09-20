import {Link ,Outlet} from "react-router-dom";
import "./nav.css";
//import MobileNav from './mobileNav.jsx';
const Navlink=()=> {
  return ( <>
  <header>
  <nav>
  <ul className="flex">
 <li className="link"><Link to="news-protfolio/home">Home</Link></li> 
 <li className="link"><Link to="news-protfolio/education">Education</Link></li> 
  <li className="link"><Link to="news-protfolio/sport">Sport</Link></li> 
 <li className="link"><Link to="/nu/notice">Nu/notice</Link></li> 
<li className="link"><Link to="/top">TopNews</Link></li> 
 <li className="link"><Link to="/international">International</Link></li> 
  </ul>
</nav>
</header>
<Outlet />
</>)
}
export default Navlink;