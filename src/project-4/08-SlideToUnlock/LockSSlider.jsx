import React from 'react'
import "./LockSlider.css"

export default function LockSlider({ handleInput, sliderValue, width }) {
  let sliderStyle = {
    width: !width ? '300px' : width,
    appearance: 'none',
    height: '50px',
    background: 'rgba(188, 190, 188, 0.5)',
    outline: 'none',
    border: '5px',
    borderRadius: '25px',
    // cursor: 'pointer',
    // background: 'linear-gradient(90deg, #ddd 50%, #f00 50%)',
     
    // background: '#ddd',
    // borderRadius: '25px',
    // position: 'relative',
  };
  
  return (
    <div>
      <input 
        type="range" 
        className='slider'
        style={sliderStyle}
        value={sliderValue}
        onInput={handleInput}
      />
    </div>
  )
}
