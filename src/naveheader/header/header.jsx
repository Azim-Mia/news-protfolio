import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import router from '/data/data/com.termux/files/home/news-protfolio/src/naveheader/route.jsx';
const Header =()=>{
  return (<> 
<RouterProvider router={router}> </RouterProvider>
  </>)
}
export default Header;