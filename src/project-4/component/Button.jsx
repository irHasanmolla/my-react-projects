import React from 'react'

export default function Button({ text="Button", icons, onClick, btnClass }) {
  return (
    <button className={!btnClass ? "btn" : btnClass} onClick={onClick}>
      {icons}
      {text}
    </button>
  )
}
