import React from 'react';
const UpperNav =()=>{
  return (<> 
  <nav className="flex bg-green mb-1 justify-between ssm:text-2xl md:text-4xl md:text-4xl">
<div className="pl-2 ssm:rs_dis_none sm:show md:show lg:show"><a href="search">search</a></div>
<div className="ml-2 hover:bg-pink"><a href="https://www.linkedin.com/in/azim703?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <p>Azim.com</p></a></div>
<div className="pr-2"><p>English</p></div>
  </nav>
  </>)
}
export default UpperNav;