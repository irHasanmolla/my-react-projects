import React from 'react'

export default function SliderComp({setValue, handleInput, bgColor, textColor}) {
  const sliderStyle = {
    width: '300px',
    height: 25,
    background: 'lightgray',
    // borderRadius: '5px',
    appearance: 'none',
    cursor: 'pointer'
  }


  return (
    <div className='container' style={{gap: 50}}>

      <input 
      type="range" 
      min={0} 
      max={100} 
      value={setValue} 
      onInput={handleInput}
      style={sliderStyle}

      />

      <div 
      style={{
        width: `${setValue * 3}px`,
        height: `${setValue * 3}px`,
        background: !bgColor ? "Lightgray" : bgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}
      >
        <span style={{color: !textColor ? "black" : textColor}}>
          {setValue}
        </span> 
      </div>
    </div>
  )
}
