import React from 'react'

export default function HasMessage({ hasMessage }) {
  return (
    <div>
      { hasMessage && <h2>You have a new Message</h2> }
    </div>
  )
}
