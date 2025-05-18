import React, { useEffect, useState } from 'react'
import Button from './Button'

export default function Alert({ type, message, delay = false }) {
  const [show, setShow] = useState(true)

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fade-out-alert");
    
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  useEffect(()=>{
    delay && setTimeout(() => {
      setShow(false)
    }, 3000)
  })
  
  return (
    show && (<div className={`alert alert-${type}`}>
      <div>
        <span>{message}</span>
        <Button btnClass='btn-close' onClick={closeAlert} text='x'/>
      </div>
    </div>)
  )
}

