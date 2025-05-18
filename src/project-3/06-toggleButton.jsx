import React, { useState } from 'react'

export default function ToggleButton() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="t-button">
      <p>Toggle Button</p>
      
      <button onClick={()=>{setIsLogged(!isLogged)}}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  )
}
