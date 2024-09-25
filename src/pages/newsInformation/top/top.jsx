import React from 'react';
import {Link} from 'react-router-dom';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../../index.css';
import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer';
const data =getAllData();
const Top = ()=>{
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className="justify-center items-center">
  {data.top.map((res)=>{
  const {id,image,title,content} =res;
  return <article key={id} className="grid md:grid-cols-3  text-2xl">
  <div className="pt-2 pl-1">
  <img className="h-96 w-96" src={image} alt="photos" />
  </div>
  <div className="pl-2">
  <h1>{trranketString(title,100)}</h1>
  <Link to={title}>learn more...</Link>
  </div>
  <div><p>{content}</p></div>
  </article>})}
   </section>
   <Footer />
  </>)
}
export default Top;