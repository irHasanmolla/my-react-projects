import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
  const id = useParams()
  
  return (
    <div>Page Number - {id} </div>
  )
}
