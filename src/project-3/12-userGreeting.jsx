import React, { useState } from 'react'

export default function UserGreeting() {
  const [name, setName] = useState('')
  
  return (
    <div className='user-greeting'>
      <p>Hello Please Put Your Name</p>
      <input 
        type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        placeholder='Write your name'
      />
      <br />
      <button>Click</button>
      <p> Hi, {name === 'Hasan' ? 'Welcome Back, Hasan!' : name || 'Stranger'}</p>

    </div>
  )
}
