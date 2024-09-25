import React  from 'react';
import {useParams,useLocation} from "react-router-dom";
//import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
const LearnMore =()=>{
  const {title} =useParams();
  const {description} =useLocation();
  return (<>
  <p>{title}</p>
 <p>{description}</p>
  </>)
}
export default LearnMore;