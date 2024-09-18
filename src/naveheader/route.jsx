import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import NavLink from './navlink.jsx'
import Home from '/data/data/com.termux/files/home/news-protfolio/src/pages/home/home.jsx';
import Sport from '/data/data/com.termux/files/home/news-protfolio/src/pages/sport/sport.jsx';
import Search from "/data/data/com.termux/files/home/news-protfolio/src/components/searchNews/search";
const router = createBrowserRouter([
  {
    path: "/",
   element:<div><NavLink /></div>,
    children:[
            {
        path:"/Home",
       element:<Home />,
      },
            {
        path:"/sport",
        element:<Sport />,
      },
      {
        path:"/nu/notice",
        element:<p>nu notice</p>,
      },
        {
        path:"/education",
        element:<p>education</p>,
      },   
              {
        path:"/bdjobs",
        element:<p>bdjobs</p>,
      }, 
     {
        path:"/top",
        element:<p>top news</p>,
      }, 
           {
        path:"/live",
        element:<p>live</p>,
      }, 
           {
        path:"/international",
        element:<p>international</p>,
      }, 
             {
        path:"search",
       element:<Search />,
      },
      ],
  },
]);
export default router;