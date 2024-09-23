import React from 'react';
import {Link} from 'react-router-dom';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../index.css'
const data =getAllData();
const Main = ()=>{
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className="justify-center items-center">
  {data.education.map((res)=>{
  const {id,image,title} =res;
  return <article key={id} className="grid p-4 ssm:grid-row md:grid-cols-2">
  <div>
  <img className="md:h-48 w-96" src={image} alt="photos" />
  </div>
  <div>
  <h1>{trranketString(title,120)}</h1>
  <Link to={title}>learn more...</Link>
  </div>
  </article>})}
   </section>
  </>)
}
export default Main;