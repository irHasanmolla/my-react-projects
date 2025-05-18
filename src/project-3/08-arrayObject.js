import React from 'react'

export default function ArrayObject() {
  const arrayObject = [
    {
    id: 1, body: '112233', content: 'aabbcc', author: 'hasan'
    }, 
    {
    id: 2, body: '11a2233', content: 'aabbsdfcc', author: 'hassan'
    }, 
    {
    id: 3, body: '11b2233', content: 'aabdfbcc', author: 'hassan'
    }
  ]
  
  return (
    <div className="object">
      {arrayObject.map((a, index)=>(
        <ul>
          <li key={index}>
            {a.body} -
            {a.content} -
            {a.author}
          </li>
        </ul>
      ))}
    </div>
  )
}
