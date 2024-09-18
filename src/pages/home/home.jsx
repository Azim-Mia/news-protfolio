import React from 'react';
const data =[{id:1,title:"news", description:"none",image:"azim.jpg"}];
const Hone = ()=>{
  return (<> 
{
  data?.map((singleData)=><article key={singleData.id} className="grid ssm:grid-cols-1 sm:grid-cols-2 sm:bg-pink md:grid-cols-2 md:bg-yellow lg:grid-cols-2 lg:bg-coral">
 <div>
 <h1>{singleData.title}</h1>
 <img src={singleData.image} alt="photos" />
 </div>
  <div>
  <p>{singleData.description}</p>
  </div>
  </article>)
}
  </>)
}
export default Hone;