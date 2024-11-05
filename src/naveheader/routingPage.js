import '../App.css';
import {
  createBrowserRouter,
} from "react-router-dom";
import Navlinks from './navlink';
import Error from '../error'
import Home from '/data/data/com.termux/files/home/news-protfolio/src/pages/homePages/home';
import Sport from '/data/data/com.termux/files/home/news-protfolio/src/pages/newsInformation/sport/sport';
import Nu from '/data/data/com.termux/files/home/news-protfolio/src/pages/newsInformation/nu/nu';
import Top from '/data/data/com.termux/files/home/news-protfolio/src/pages/newsInformation/top/top';
import International from '/data/data/com.termux/files/home/news-protfolio/src/pages/newsInformation/international/international';
import Education from '/data/data/com.termux/files/home/news-protfolio/src/pages/newsInformation/education/education';
import LearnMore from '../../src/pages/learnMore';
import Search from "../../src/components/searchNews/search";
export const router = createBrowserRouter([
  {
    path: "/",
   element:<Navlinks />,
   errorElement:<Error />,
    children:[
              {
        path:"/",
       element:<Home />,
      },
            {
        path:"news-protfolio",
       element:<Home />,
      },
           {
        path:"sport",
        element:<Sport />,
      },
      {
        path:"nu/notice",
        element:<Nu />,
      },
        {
        path:"education",
        element:<Education />,
      },   
              {
        path:"bdjobs",
        element:<p>bdjobs</p>,
      }, 
     {
        path:"top",
        element:<Top />,
      }, 
           {
        path:"live",
        element:<p>live</p>,
      }, 
           {
        path:"international",
        element:<International />,
      }, 
             {
        path:"search",
       element:<Search />,
      },
  {
        path:"news-protfolio/:title",
       element:<LearnMore />,
      },
        {
        path:"top/:title",
       element:<LearnMore />,
      },
              {
        path:"nu/notice/:title",
       element:<LearnMore />,
      },
              {
        path:"/:title",
       element:<LearnMore />,
      },
              {
        path:"bdjobs/:title",
       element:<LearnMore />,
      },
              {
        path:"international/:title",
       element:<LearnMore />,
      },
              {
        path:"live/:title",
       element:<LearnMore />,
      },
              {
        path:"education/:title",
       element:<LearnMore />,
      },
              {
        path:"sport/:title",
       element:<LearnMore />,
      },
      ],
  },
]);