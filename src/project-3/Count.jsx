import React, {useState} from 'react'

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <p>count :{count}</p>
      <button onClick={()=>setCount(count + 1)}>click</button>
      <button onClick={()=>setCount(count - 1)}>click</button>
    </div>
  )
}
