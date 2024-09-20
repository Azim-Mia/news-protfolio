import {Link ,Outlet} from "react-router-dom";
import "./nav.css";
import MobileNav from './mobileNav.jsx';
import UpperNav from './upperNav/upperNav'
const Navlink=()=> {
  return ( <>
  <header>
  <div><UpperNav /></div>
 <div className="md:dis_icon_none lg:dis_icon_none lg:dis_icon_none">
   <MobileNav />
  </div>
  <nav className=" mt-2 ssm:rs_dis_none sm:respon_sm md:respon_md lg:respon_lg ">
  <ul className="flex">
 <li className="link"><Link to="/news-protfolio">Home</Link></li> 
 <li className="link"><Link to="/education">Education</Link></li> 
  <li className="link"><Link to="/sport">Sport</Link></li> 
 <li className="link"><Link to="/nu/notice">Nu/notice</Link></li> 
<li className="link"><Link to="/top">TopNews</Link></li> 
 <li className="link"><Link to="/international">International</Link></li> 
  </ul>
</nav>
<div className="mt-2"><Outlet /></div>
</header>
</>)
}
export default Navlink;