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
        path:"nu/notice",
        element:<p>nu notice</p>,
      },
        {
        path:"education",
        element:<p>education</p>,
      },   
              {
        path:"bdjobs",
        element:<p>bdjobs</p>,
      }, 
     {
        path:"top",
        element:<p>top news</p>,
      }, 
           {
        path:"live",
        element:<p>live</p>,
      }, 
           {
        path:"international",
        element:<p>international</p>,
      }, 
             {
        path:"search",
       element:<Search />,
      },
      ],
  },
]);