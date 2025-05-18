import React from 'react'

export default function Greetings({name, age, country}) {
  return (
    <div>
        My name is {name}. I am {age} years old and I live in {country}
    </div>
  )
}
