//import {Link} from 'react-router-dom';
//import {useState,useEffect} from 'react';
//import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import Footer from '../../../src/footer/footer';
import Header from '../../../src/header/header'
import JobNews from '../../../src/components/homeComponents/jobnews/jobnews';
import NewsInformation from '../../../src/components/homeComponents/newsinformation/newsinformation';
import GovtJob from '../../../src/components/homeComponents/govtjob/govtjob';
import SpatialJob from '../../../src/components/homeComponents/spatialjob/spatialjob';
import BrowserCategory from '../../../src/components/homeComponents/browsercategory/browsercategory';
import HotJob from '../../../src/components/homeComponents/hotjob/hotjob';
import HotNews from '../../../src/components/homeComponents/hotnews/hotnews';
import '../../index.css'
//const allData =getAllData();
const Home = ()=>{
  return (<>
<Header />
  <main className="text-center">
  <JobNews />
<NewsInformation />
<GovtJob />
<SpatialJob />
<BrowserCategory />
<HotJob />
<HotNews />
  </main>
  <Footer />
  </>)
}
export default Home;