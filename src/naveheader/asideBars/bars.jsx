import {useState} from 'react';
import {NavLink } from 'react-router-dom';

import "./bar.css";
const Bars =() =>{
const [burger_class, setBurgerClass] =useState("burger-bar unClicked");
const [menu_class,setMenuClass] =useState("menu hidden");
const [isMenuClicked,setIsClicked] =useState(false);
  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }else{
     setBurgerClass("burger-bar unClicked");
      setMenuClass("menu hidden");
    }
    setIsClicked(!isMenuClicked)
  }
  return ( <>
  <nav className="nav">
  <div className="burger_menu" onClick={updateMenu}> 
  <div className={burger_class}></div>
    <div className={burger_class}></div>
    <div className={burger_class}></div>
  </div>
<div className ={menu_class}>
<ul className="border p-2 mt-2 ml-2 mb-2">
<li className="active:blue"><NavLink to="/news-protfolio">Home</NavLink></li>
<li><NavLink to="/education">Education</NavLink></li>
<li><NavLink to="/sport">Sport</NavLink></li>
<li><NavLink to="/nu/notice">Nu Notice</NavLink></li>
<li><NavLink to="/top">Top News</NavLink></li>
<li><NavLink to="/international">International</NavLink></li>
</ul>
  </div>
    </nav>
  </>)
}
export default Bars;