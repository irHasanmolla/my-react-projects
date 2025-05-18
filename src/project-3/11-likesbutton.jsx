import React, { useState } from 'react'

export default function LikesButton() {
  const [likes, setLikes] = useState(0)
  
  return (
    <div className="likes-button" style={{margin: 50}}>
      <p>Likes Button</p>
      {likes}
      <br />
      <button onClick={() => setLikes(likes + 1)}>Click</button>
      <button onClick={() => setLikes(0)}>Reset</button>
    </div>
  )
}
