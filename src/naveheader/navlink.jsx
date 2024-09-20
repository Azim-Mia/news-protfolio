import {Link ,Outlet} from "react-router-dom";
import "./nav.css";
//import MobileNav from './mobileNav.jsx';
const Navlink=()=> {
  return ( <>
  <header>
  <nav>
  <ul className="flex">
 <li className="link"><Link to="/">Home</Link></li> 
 <li className="link"><Link to="/education">Education</Link></li> 
  <li className="link"><Link to="/sport">Sport</Link></li> 
 <li className="link"><Link to="/nu/notice">Nu/notice</Link></li> 
<li className="link"><Link to="/top">TopNews</Link></li> 
 <li className="link"><Link to="/international">International</Link></li> 
  </ul>
</nav>
<Outlet />
</header>
</>)
}
export default Navlink;