import React, { useState } from 'react'
import Button from '../component/Button'

export default function TemperatureControl() {
  const [handleNumber, setHandleNumber] = useState(0)

  const handlePClick = (change) => {
    setHandleNumber(prev => prev + change)
  }
  
  return (
    <div className="temperature-control">
      <div className="temperature-control-card">
        <div className={handleNumber <= 0 ? "temperature-degree-negative" : "temperature-degree-positive"}> {handleNumber} °C</div>
        <div className='temperature-control-btn'>

          <Button btnClass={'temp-button'} text='-' onClick={()=>handlePClick(-1)} />

          <Button btnClass={'temp-button'} text='+' onClick={()=>handlePClick(1)} />

        </div>
      </div>
    </div>
  )
}
