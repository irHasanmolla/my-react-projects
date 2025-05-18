import React from 'react'

export default function Title({ text }) {
  return (
    <div className="title">
      <h1>{!text ? 'Title' : text}</h1>
    </div>
  )
}
