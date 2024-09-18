import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Footer from '../src/footer/footer.js';
import Main from '../src/components/mainSection/main.jsx';
import router from '../src/naveheader/routingPage.jsx';
import UpperNav from  '/data/data/com.termux/files/home/news-protfolio/src/naveheader/upperNav/upperNav.jsx';
function App() {
  return (<>
    <header>
    <UpperNav />
    <RouterProvider router={router}> </RouterProvider>
    </header>
    <main><Main /></main>
    <footer><Footer /></footer>
    </>);
}

export default App;
