import React from 'react'
import './NavBar.css';

const NavBar = () => {
   
  return (

    <div> 
    <div className="Nav">
       <div>
         <img id="Navlogo" src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png'/>
       </div>
       <div>
          <input id='pcs' type="url" placeholder='Deliver to Select Pincode'  />
          <input id='search' type="text" placeholder='Search medicines/Healthcare Producta @18% Off' />
          <button id='seacrchbutton'>SearchIcon </button>
       </div>
     
    
    </div>



    </div>
  )
}

export default NavBar