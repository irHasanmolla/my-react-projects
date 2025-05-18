import React from 'react'

export default function IsLoggedIn({ isLoggedInCorrect }) {

  return (
    <h2>{isLoggedInCorrect ? "Welcome back Hasan" : "Please Log In"}</h2>
  )
}
