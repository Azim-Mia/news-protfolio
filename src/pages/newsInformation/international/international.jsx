import React from 'react';
import {Link} from 'react-router-dom';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../../index.css';
import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer';
const data =getAllData();
const International = ()=>{
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className="items-center ssm:pl-2 pr-2">
  {data.international.map((res)=>{
  const {id,image,title} =res;
  return <article key={id} className="text-center">
  <Link to={title} className="grid text-2xl mt-2 gap-2 ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
  <img className="pt-2" src={image} alt="photos" />
  <h1>{trranketString(title,100)}</h1>
  <img className="pt-2" src={image} alt="photos" />
  <h1>{trranketString(title,100)}</h1>
</Link>
  </article>})}
  <button>Next++</button>
   </section>
   <Footer />
  </>)
}
export default International;