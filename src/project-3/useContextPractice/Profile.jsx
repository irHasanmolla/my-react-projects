import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function Profile() {
  const userName = useContext(UserContext)
  
  return (
    <div>
      <h2>hi {userName}</h2>
    </div>
  )
}
