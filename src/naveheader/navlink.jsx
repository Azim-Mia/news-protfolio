import { NavLink ,Outlet} from "react-router-dom";
import "./nav.css";
import '../index.css';
import MobileNav from './mobileNav.jsx';
import UpperNav from './upperNav/upperNav'
const Navlinks=()=> {
  return ( <>
  <header>
  <div><UpperNav /></div>
 <div className="sm:dis_icon_none md:dis_icon_none lg:dis_icon_none lg:dis_icon_none">
  <div> <MobileNav /></div>
  </div>
  <nav className="mt-2 ssm:rs_dis_none sm:respon_sm md:respon_md lg:respon_lg ">
  <ul className="flex gap-4">
 <li className="link"><NavLink to="/">Home</NavLink></li> 
 <li className="link"><NavLink to="/education">Education</NavLink></li> 
  <li className="link"><NavLink to="/sport">Sport</NavLink></li> 
 <li className="link"><NavLink to="/nu/notice">Nu/notice</NavLink></li> 
<li className="link"><NavLink to="/top">TopNews</NavLink></li> 
 <li className="link"><NavLink to="/international">International</NavLink></li> 
  </ul>
</nav>
<div className="mt-2">
<Outlet />
</div>
</header>
</>)
}
export default Navlinks;