import React, { useState } from 'react'

export default function Name() {
  const [name, setName] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="name">
      <form action="">
        <h2>Enter your name</h2>
        <input type="text" value={name} onChange={handleName}/>
        <p>Hello {name}</p>
      </form>
    </div>
  )
}
