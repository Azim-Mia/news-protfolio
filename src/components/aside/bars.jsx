import {useState} from 'react';
import "./bar.css";
import NaveHeader from '/data/data/com.termux/files/home/news-protfolio/src/naveheader/nav.jsx';
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

  <div className="text-black text-3xl">
  <div className ={menu_class}>
 <div> <input type="search" placeholder="search product" className="border text-center" />
    <NaveHeader /></div>
  </div>
  </div>
    </nav>
  </>)
}
export default Bars;