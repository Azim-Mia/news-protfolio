//import {Link} from 'react-router-dom';
//import {useState,useEffect} from 'react';
import '../../../index.css';
//import { getAllData } from '/data/data/com.termux/files/home/news-protfolio/src/storeData/allData';
import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer';
import Header from '/data/data/com.termux/files/home/news-protfolio/src/header/header'
import JobNews from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/jobnews/jobnews';
import NewsInformation from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/newsinformation/newsinformation';
import GovtJob from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/govtjob/govtjob';
import SpatialJob from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/spatialjob/spatialjob';
import BrowserCategory from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/browsercategory/browsercategory';
import HotJob from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/hotjob/hotjob';
import HotNews from '/data/data/com.termux/files/home/news-protfolio/src/components/homeComponents/hotnews/hotnews';
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