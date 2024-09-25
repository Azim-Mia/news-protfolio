import React  from 'react';
import {useParams,useLocation} from "react-router-dom";
//import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
const LearnMore =()=>{
  const {title} =useParams();
  const {description} =useLocation();
  return (<div className="m-2">
  <p className="text-3xl">{title}</p>
  <hr />
 <p className="text-2xl mt-4">{description}</p>
  </div>)
}
export default LearnMore;