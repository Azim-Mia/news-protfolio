//import {useState} from 'react';
import {Link} from 'react-router-dom';
//import { FaAlignJustify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import '../index.css';
import './nav.css';
import Bars from '/data/data/com.termux/files/home/news-protfolio/src/naveheader/asideBars/bars'
const MobileNav =()=>{
return (<div className="flex text-white text-center justify-start justify-between bg-[url('../public/images/news.jpg')]">
<div className="pr-8"><Bars /></div>
<div>
<Link to="/search"><CiSearch className="text-3xl mt-2" />
</Link>
</div>
    </div>)
}
export default MobileNav;