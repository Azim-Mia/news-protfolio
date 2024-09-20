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
    path: "/",
   element:<NavLink />,
   errorElement:<Error />,
    children:[
              {
        path:"/news-protfolio",
       element:<Home />,
      },
            {
        path:"home",
       element:<Home />,
      },
            {
        path:"sport",
        element:<Sport />,
      },
      {
        path:"notice",
        element:<p>nu notice</p>,
      },
        {
        path:"education",
        element:<p>education</p>,
      },   
              {
        path:"/news-protfolio/bdjobs",
        element:<p>bdjobs</p>,
      }, 
     {
        path:"/news-protfolio/top",
        element:<p>top news</p>,
      }, 
           {
        path:"/news-protfolio/live",
        element:<p>live</p>,
      }, 
           {
        path:"/news-protfolio/international",
        element:<p>international</p>,
      }, 
             {
        path:"/news-protfolio/search",
       element:<Search />,
      },
      ],
  },
]);