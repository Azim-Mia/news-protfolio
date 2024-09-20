import '../App.css';
import {
  createBrowserRouter,
} from "react-router-dom";
import NavLink from './navlink';
import Error from '../error'
import Home from '../../src/pages/home/home';
import Sport from '../../src/pages/sport/sport';
import Search from "../../src/components/searchNews/search";
export const router = createBrowserRouter([
  {
    path: "/news-protfolio",
   element:<NavLink />,
   errorElement:<Error />,
    children:[
              {
        path:"/news-protfolio/other",
       element:<p>hello</p>,
      },
            {
        path:"news-protfolio/home",
       element:<Home />,
      },
            {
        path:"news-protfolio/sport",
        element:<Sport />,
      },
      {
        path:"news-protfolio/nu/notice",
        element:<p>nu notice</p>,
      },
        {
        path:"news-protfolio/education",
        element:<p>education</p>,
      },   
              {
        path:"news-protfolio/bdjobs",
        element:<p>bdjobs</p>,
      }, 
     {
        path:"news-protfolio/top",
        element:<p>top news</p>,
      }, 
           {
        path:"news-protfolio/live",
        element:<p>live</p>,
      }, 
           {
        path:"news-protfolio/international",
        element:<p>international</p>,
      }, 
             {
        path:"news-protfolio/search",
       element:<Search />,
      },
      ],
  },
]);