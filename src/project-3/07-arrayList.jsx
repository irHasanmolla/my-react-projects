import React from 'react'

export default function ArrayList() {
  const arrayList = ["python", 'Javascript', 'react', 'php']
  return (
    <ul>
      {arrayList.map((a, index)=>(
        <li key={index}>
          {a}
        </li>
      ))}
    </ul>
  )
}
