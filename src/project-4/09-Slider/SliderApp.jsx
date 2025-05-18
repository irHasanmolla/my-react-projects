import React, { useState } from 'react'
import SliderComp from './SliderComp'
import Title from '../component/Title'

export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0)

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value)
  }

  let bgColor;
  let textColor;
  if (slideValue < 20) {
    bgColor = "blue";
    textColor = "white"
  } else if (slideValue < 50) {
    bgColor = "red";
    textColor = "white"
  } else if (slideValue < 80) {
    bgColor = "yellow";
    textColor = "black"
  } else {
    bgColor = "green";
    textColor = "white"
  }




  return (
    <div className='container'>
      <Title text={"Slide to grow"}/>
      <SliderComp 
        setValue={slideValue} 
        handleInput={(e)=>handleSliderValueChange(e)}
        bgColor={bgColor}
        textColor={textColor}

      />
    </div>
  )
}
