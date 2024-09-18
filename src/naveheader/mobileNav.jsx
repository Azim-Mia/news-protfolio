import {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import '../index.css';
import './nav.css';
const MobileNav =()=>{
  const [isClicked, serIsClicked] = useState(false);
  const handleIsClicked =()=>{
    if(!isClicked){
      serIsClicked(true)
    }else{
      serIsClicked(false);
    }
  }
  return(<>
    <div>
<div className="flex justify-end bg-pink gap-2 pr-2 text-3xl">
<div><p>To day News</p></div>
<div className="pl-1 mt-0.9 text-center pr-1"><Link to="search"><CiSearch /></Link></div>
<div className=""><button onClick={handleIsClicked}><Link to="/search">{isClicked ? <p className="text-3xl">×</p>: <FaAlignJustify className= "hover:bg-blue p-1" />}</Link></button></div>
</div>
{isClicked && <div className="flex flex-col text-white text-2xl bg-[url('../src/assets/news.jpg')]">
<div className="navBtn_link"><Link to="/home">Home</Link></div>
<div className="navBtn_link"><Link to="/education">Education</Link></div>
<div className="navBtn_link"><Link to="/sport">Sport</Link></div>
<div className="navBtn_link"><Link to="/nu/notice">Nu Nutice</Link></div>
<div className="navBtn_link"><Link to="/bdjobs">BD Jobs</Link></div>
<div className="navBtn_link"><Link to="/live">Live Tv</Link></div>
<div className="navBtn_link"><Link to="/top">Top News</Link></div>
<div className="navBtn_link"><Link to="/international">International News</Link></div>
</div>}
    </div>
    </>)
}
export default MobileNav;