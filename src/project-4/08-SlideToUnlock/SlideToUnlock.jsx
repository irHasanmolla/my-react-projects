import React from 'react'
import LockSlider from './LockSSlider'



export default function SlideToUnlock() {
  return (
    <div style={{
      height: '70vh',
      marginTop: '15vh',
      width: '340',
      border: '4px solid black',
    }} className={'container-slider'}>
      <LockSlider width={'500px'}/>
    </div>
  )
}
