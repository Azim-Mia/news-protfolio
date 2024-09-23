import {Link} from 'react-router-dom';
//import {useState,useEffect} from 'react';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../index.css'
const allData =getAllData();
const Home = ()=>{
 
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className="justify-center items-center">
  {allData.education.map((res)=>{
  const {id, title,image} =res;
  return <article key={id} className="grid p-4 ssm:grid-row md:grid-cols-2">
  <div>
  <img className="md:h-48 w-96" src={image} alt="photos" />
  </div>
  <div>
  <p>{trranketString(title,120)}</p>
 <Link to={title}>Learn More ...</Link> 
  </div>
  </article>})}
   </section>
  </>)
}
export default Home;