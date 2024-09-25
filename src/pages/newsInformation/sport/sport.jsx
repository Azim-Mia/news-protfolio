import React from 'react';
import {Link} from 'react-router-dom';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../../index.css';
import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer';
const data =getAllData();
const Sport = ()=>{
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className="justify-center items-center">
  {data.sport.map((res)=>{
  const {id,image,title} =res;
  return <article key={id} className="grid gap-2 md:grid-cols-3 md:text-2xl">
  <div>
  <img className="md:h-96 w-96" src={image} alt="photos" />
  </div>
  <div>
  <h1>{trranketString(title,120)}</h1>
  <Link to={title}>learn more...</Link>
  </div>
  </article>})}
   </section>
   <Footer />
  </>)
}
export default Sport;