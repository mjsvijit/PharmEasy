import React,{useState,useEffect} from 'react'
import CarouselItem from './CarouselItem'
import './Caraousel.css'
import CarauselControls from './CarauselControls'

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(()=>{
      const slideInterval = setInterval(()=> {
          setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide +1 : 0)
      }, 3000)

      return ()=> clearInterval(slideInterval)
  }, [])
  
  
  return (
    <div className='carousel'>
    <div 
    className='carousel-inner'
    style={{transform: `translate(${-currentSlide * 100}%)`}}
    >
        {
          slides.map((slide,index)=>(
           <CarouselItem slide={slide} key={index} />
          ))
        }
    </div>
           <CarauselControls />

    </div>
  )
}

export default Carousel