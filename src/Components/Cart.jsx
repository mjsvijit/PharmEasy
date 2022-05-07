import React, {useEffect,useState} from 'react'

const Cart = () => {
   const [printCart, setPrintCart] = useState([]);
   useEffect(()=>{
       fetch('http://localhost:3000/cart')
       .then((res)=> res.json())
       .then((data)=>setPrintCart(data))
   },[])
  return (
    <div>
    {
        printCart.map((task,index)=>( 
            <div>
             
              <img src={task.image}  style={{width:"100px"}}/>
                     <h3>Product Name:-{task.title}</h3>
                     <h3>MRP:-{task.MRP}</h3>         
            </div>
        ))
    }
    
    </div>
  )
}

export default Cart