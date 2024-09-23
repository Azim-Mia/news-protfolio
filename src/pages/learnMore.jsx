import React  from 'react';
import {useParams} from "react-router-dom";
//import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
const LearnMore =()=>{
  const {title} =useParams();
  return (<>
  <p>{title}</p>
  </>)
}
export default LearnMore;