import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
//import Footer from '/data/data/com.termux/files/home/news-protfolio/src/footer/footer.js';
//import Main from '/data/data/com.termux/files/home/news-protfolio/src/components/mainSection/main.jsx';
import router from '/data/data/com.termux/files/home/news-protfolio/src/naveheader/route.jsx';
//import UpperNav from  '/data/data/com.termux/files/home/news-protfolio/src/naveheader/upperNav/upperNav.jsx';
function App() {
  return (<>
     <RouterProvider router={router}> </RouterProvider>
    </>);
}

export default App;
