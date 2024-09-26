import React from 'react';
import {Link} from 'react-router-dom';
import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import '../../../index.css'
import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer';
const data =getAllData();
const Education = ()=>{
  const trranketString=(str, num)=>{
  if(str.length > num){
    return str.slice(0, num) + " ...";
  }else{
    return str;
  }
  }
  return (<>
  <section className=" justify-center items-center mb-2">
  {data.education.map((res)=>{
  const {id,image,title} =res;
  return <article key={id}>
  <Link to={title} className="grid text-2xl mt-2 gap-2 ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
   <img className="md:h-48 w-72 lg:h-72 w-96" src={image} alt="photos" />
   <h1>{trranketString(title,100)}</h1>
      <img className="md:h-48 w-72 lg:h-72 w-96" src={image} alt="photos" />
   <h1>{trranketString(title,100)}</h1>
  </Link>
  </article>})}
   </section>
   <Footer />
  </>)
}
export default Education;