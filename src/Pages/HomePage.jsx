import React from 'react'
import MainPageSlider from './MainPageSlider'
import NavBar from './NavBar'
import './HomePage.css'
import MainPageFooter from './MainPageFooter'

const HomePage = () => {
  return (
    <div>
    <NavBar/>
    <MainPageSlider />
    
    
    <div className='pagediv'>
    
    <div className='page' >
    <div className='div1' style={{backgroundColor:""}}>
       <img id='img1' src='https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1&q=100'/>

    </div>
    
    <div className='div2'>
        <button id='button1' style={{backgroundColor:"#3bb896"}}>Order Now</button>
    </div>

    </div>

    <div  className='page'>
    <div className='div12'>
       <img id='img1' src='https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1&q=100'/>
    </div>
    <div className='div2'>
        <button id='button1' >Order Now</button>
    </div>
    </div>
    <div  className='page'>
    <div className='div1'>
       <img id="img1"src='https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1&q=100'/>
    </div>
    <div className='div2'>
    <button id='button1' style={{backgroundColor:"#3bb896"}}>Book Now</button>
    </div>
    </div>
    
    </div>
    <div className='pagediv1'>
       <img id='pagediv1img1' src='https://assets.pharmeasy.in/web-assets/dist/e3db129c.png'/>


       <h2 id='pagediv1h2'> Save flat 5% extra on medicines & enjoy Free delivery with plus membership</h2>

       <img id='pagediv1img2' src='https://assets.pharmeasy.in/web-assets/dist/b20b0932.png'/>
   
       </div>
       <br/>

       <MainPageFooter />
    <div style={{height:"600px"}}>
    
    </div>
    
    </div>
  )
}

export default HomePage