import {Link ,Outlet} from "react-router-dom";
import "./nav.css";
import MobileNav from './mobileNav.jsx';
const Navlink=()=>{
  return (<>
 <div className="sm:rs_dis_none xsm:rs_dis_none">
 <MobileNav/>
 </div>
  <div className="ssm:dis_icon_none sm:respon_sm md:respon_md lg:respon_lg">
<div className="link"><Link to="/home">Home</Link></div>
<div className="link"><Link to="/education">Education</Link></div>
<div className="link"><Link to="/sport">Sport</Link></div>
<div className="link"><Link to="/nu/notice">Nu/Nutice</Link></div>
<div className="link"><Link to="/bdjobs">BDJobs</Link></div>
<div className="link"><Link to="/top">TopNews</Link></div>
<div className="link"><Link to="/international">International</Link></div>
</div>
<div><Outlet /></div>
</>)
}
export default Navlink;