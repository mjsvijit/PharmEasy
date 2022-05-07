import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    
   
  
  return (

    <div className='mainNav' > 
    
    <div className="Nav">
       <div >
         <img id="Navlogo" src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png'/>
       </div>
       <div>
          <input id='pcs' type="url" placeholder='Deliver to Select Pincode'  />
          <input id='search' type="text" placeholder='Search medicines/Healthcare Producta @18% Off' />
          <button id='seacrchbutton'>SearchIcon </button>
       </div>

       <div style={{marginTop:"40px", color:"white"}}>
          <Link to="/cart" style={{color:"white",textDecoration:"none"}}>Cart</Link>
       </div>
     
    
    </div>
    <div className='Nav2'>
         <Link to="/" ></Link>
         <Link to="/medicens" id="link" >Order Medicines</Link>
         <Link to="/Health" id="link">Healthcare Products</Link>
         <Link to="/Labtest" id="link">Lab Tests</Link>
    </div>
  


    </div>
  )
}

export default NavBar